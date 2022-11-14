import * as _jsx_runtime from "react/jsx-runtime";

import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import { rehypeExtractTitle, rehypeRemoveTitle } from "./utils/mdx-utils";

import { C } from "@icons-pack/react-simple-icons";
import React from "react";
import ReactDOM from "react-dom";
import { bundleMDX } from "mdx-bundler";
import { compile } from "@mdx-js/mdx";
import mdx from "remark-mdx";
import rehypeInferDescriptionMeta from "rehype-infer-description-meta";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
// @ts-expect-error
import rehypeTruncate from "rehype-truncate";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { valueToEstree } from "estree-util-value-to-estree";

const DEVELOPMENT_STATUSES = [
  "Active development",
  "Pre-beta phase!",
  "Done",
] as const;

const PROJECT_TAGS = ["open source", "accepts volunteers"] as const;

const wrappedPlugin = () => {
  // TODO: accept name and message as part of the wrapper
  return function transformer(tree, vfile) {
    console.log(vfile.data.meta.descriptionHast);
    tree.children.unshift({
      type: "mdxjsEsm",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExportNamedDeclaration",
              source: null,
              specifiers: [],
              declaration: {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "metaDescription" },
                    init: valueToEstree(vfile.data.meta.descriptionHast),
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
};
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      // required: true,
    },
    created_at: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.substring("posts/".length),
    },
    title: {
      type: "string",
      resolve: async (post) => {
        if (post.title) {
          return post.title;
        }
        return String(
          await unified()
            .use(remarkParse)
            .use(mdx)
            .use(remarkRehype)
            .use([rehypeExtractTitle])
            .use([rehypeStringify])
            .process(post.body.raw)
        );
      },
    },
    summary: {
      type: "string",
      // resolve: async (post) => {
      //   if (post.title) {
      //     return post.title;
      //   }
      //   console.log(
      //     await unified()
      //       .use(remarkParse)
      //       .use(mdx)
      //       .use(remarkRehype)
      //       .use([rehypeRemoveTitle])
      //       .use([rehypeInferDescriptionMeta, { truncateSize: 10 }])
      //       .use([rehypeStringify])
      //       .process(post.body.raw)
      //   );
      //   return String(
      //     (
      //       await unified()
      //         .use(remarkParse)
      //         .use(mdx)
      //         .use(remarkRehype)
      //         .use([rehypeRemoveTitle])
      //         .use([rehypeInferDescriptionMeta, { truncateSize: 10 }])
      //         .use([rehypeStringify])
      //         .process(post.body.raw)
      //     ).data.meta?.description
      //   );
      // },
      resolve: async (post) => {
        // console.log(rehypeInferDescriptionMeta);
        const bundle = await bundleMDX({
          source: post.body.raw,
          mdxOptions(options, frontmatter) {
            // options.remarkPlugins = [...(options.remarkPlugins ?? []), myRemarkPlugin]
            options.rehypePlugins = [
              ...(options.rehypePlugins ?? []),
              rehypeRemoveTitle,
              [
                rehypeInferDescriptionMeta,
                { truncateSize: 200, inferDescriptionHast: true },
              ],
              wrappedPlugin,
            ];

            return options;
          },
        });

        const scope = { React, ReactDOM, _jsx_runtime };
        const fn = new Function(...Object.keys(scope), bundle.code);
        const result = fn(...Object.values(scope));
        console.log(result);
        console.log(JSON.stringify(result.metaDescription, null, 2));

        console.log(typeof result.metaDescription);
        return await unified()
          .use(rehypeStringify)
          .stringify(result.metaDescription);
      },
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the project",
      required: true,
    },
    preview: {
      type: "string",
      description: "The url of the project preview image",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true,
    },
    status: {
      type: "enum",
      options: DEVELOPMENT_STATUSES,
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "enum",
        // TODO: file issue because this does not seem to work
        options: PROJECT_TAGS,
      },
      required: true,
    },
    links: {
      type: "list",
      description: "The links to the project",
      required: true,
      of: { type: "string" },
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (project) =>
        project._raw.flattenedPath.substring("projects/".length),
    },
    url: {
      type: "string",
      resolve: (project) => project._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project],
});
