import * as _jsx_runtime from "react/jsx-runtime";

import { rehypeRemoveTitle, remarkExtractTitle } from "../utils/mdx-utils";

import { C } from "@icons-pack/react-simple-icons";
import React from "react";
import ReactDOM from "react-dom";
import { bundleMDX } from "mdx-bundler";
import { compile } from "@mdx-js/mdx";
import { defineDocumentType } from "contentlayer/source-files";
import mdx from "remark-mdx";
import rehypeInferDescriptionMeta from "rehype-infer-description-meta";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
// @ts-expect-error
import rehypeTruncate from "rehype-truncate";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkStringify from "remark-stringify";
import { toEstree } from "hast-util-to-estree";
import { toJs } from "estree-util-to-js";
import { unified } from "unified";
import { valueToEstree } from "estree-util-value-to-estree";

// const mdxHastToJsx = require("@mdx-js/mdx/mdx-hast-to-jsx");

const wrappedPlugin = () => {
  // TODO: accept name and message as part of the wrapper
  return function transformer(tree: any, vfile: any) {
    // console.log(JSON.stringify(vfile.data.meta.descriptionHast, null, 2));
    // console.log("*****");
    // console.log("*****");
    // console.log("*****");
    const node = {
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
    };

    // TODO: all these comments are for attempting exporting the summary.
    // console.log(
    //   "valuetoEsTree",
    //   valueToEstree(JSON.stringify(vfile.data.meta.descriptionHast, null, 2))
    // );
    // console.log(
    //   "toEsTree",
    //   JSON.stringify(toEstree(vfile.data.meta.descriptionHast), null, 2)
    // );

    // const node = {
    //   type: "mdxjsEsm",
    //   data: {
    //     estree: toEstree(vfile.data.meta.descriptionHast),
    //   },
    // };

    // const node = {
    //   type: "mdxjsEsm",
    //   data: {
    //     estree: {
    //       type: "Program",
    //       sourceType: "module",
    //       body: [
    //         {
    //           type: "ExportNamedDeclaration",
    //           source: null,
    //           specifiers: [],
    //           declaration: {
    //             type: "VariableDeclaration",
    //             kind: "const",
    //             declarations: [
    //               {
    //                 type: "VariableDeclarator",
    //                 id: { type: "Identifier", name: "metaDescription" },
    //                 init: toEstree(vfile.data.meta.descriptionHast).body[0]
    //                   .children,
    //               },
    //             ],
    //           },
    //         },
    //       ],
    //     },
    //   },
    // };
    // console.log("*****");
    // console.log("*****");
    // console.log("node", JSON.stringify(node, null, 2));
    tree.children.unshift(node);
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
          return String(
            await unified()
              .use(remarkParse)
              .use(remarkGfm)
              .use(remarkRehype)
              .use(rehypeStringify)
              .process(post.title)
          );
          return post.title;
        }
        return String(
          await unified()
            .use(remarkParse)
            .use(remarkGfm)
            .use([remarkExtractTitle])
            .use(remarkRehype)
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

        // console.log("here");
        const scope = { React, ReactDOM, _jsx_runtime };
        const fn = new Function(...Object.keys(scope), bundle.code);
        const result = fn(...Object.values(scope));
        // console.log(result);
        // console.log(JSON.stringify(result.metaDescription, null, 2));

        // return result.metaDescription;
        // console.log(typeof result.metaDescription);
        return await unified()
          .use(rehypeStringify)
          .stringify(result.metaDescription);
      },
    },
  },
}));
