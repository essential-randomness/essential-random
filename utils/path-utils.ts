import { rehypeExtractTitle, rehypeRemoveTitle } from "./mdx-utils";

import { REMARK_PLUGINS } from "../next.config.mjs";
import { bundleMDX } from "mdx-bundler";
import { compile } from "@mdx-js/mdx";
import dirTree from "directory-tree";
import path from "path";
import { readFile } from "fs/promises";
// @ts-expect-error
import rehypeTruncate from "rehype-truncate";
import yaml from "js-yaml";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");
const BLOG_PAGES_PATH = path.join(process.cwd(), "/pages/blog/");

// TODO: figure out whether it's possible to do all this extraction in a single pass
// and get the information without having to recompile all the time
const extractBlogEntryTitle = async (file: string) => {
  return String(
    (
      await bundleMDX({
        file,
        // mdxOptions: (options) => {
        //   options.remarkPlugins = [
        //     ...(options.remarkPlugins ?? []),
        //     ...(REMARK_PLUGINS as any),
        //   ];
        //   options.rehypePlugins = [
        //     ...(options.rehypePlugins ?? []),
        //     rehypeExtractTitle,
        //   ];

        //   return options;
        // },
      })
    ).code
  );
};

const extractBlogEntrySummary = async (file: string) => {
  return String(
    (
      await bundleMDX({
        file,
        // mdxOptions: (options) => {
        //   options.remarkPlugins = [
        //     ...(options.remarkPlugins ?? []),
        //     ...(REMARK_PLUGINS as any),
        //   ];
        //   options.rehypePlugins = [
        //     ...(options.rehypePlugins ?? []),
        //     rehypeRemoveTitle,
        //     rehypeTruncate,
        //   ];

        //   return options;
        // },
      })
    ).code
  );
};

const extractBlogEntryDetails = async (
  blogEntry: Pick<ReturnType<typeof dirTree>, "name" | "extension" | "path">
) => {
  // const file = await readFile(blogEntry.path, { encoding: "utf8" });
  // const frontmatter = yaml.loadAll(file);

  return {
    slug: blogEntry.name.slice(0, -(blogEntry.extension?.length || 0)),
    createdAt: new Date(),
    compiledSummary: await extractBlogEntrySummary(blogEntry.path),
    compiledTitle: await extractBlogEntryTitle(blogEntry.path),
  };
};

/**
 * @returns An array of details for all the blog entries in BLOG_CONTENT_PATH.
 */
export const getBlogEntriesInContentPath = async () => {
  return Promise.all(
    dirTree(BLOG_CONTENT_PATH, {
      extensions: /\.mdx/,
      attributes: ["extension"],
    }).children!.map(extractBlogEntryDetails)
  );
};

/**
 * @returns An array of details for the given blog entry in BLOG_CONTENT_PATH.
 */
export const getBlogEntryInContentPath = async ({ slug }: { slug: string }) => {
  const path = getBlogEntryPath({ slug });
  console.log(path);
  return await extractBlogEntryDetails({
    path: path,
    extension: ".mdx",
    name: slug + ".mdx",
  });
};

/**
 * @returns An array of slugs for all the blog entries in BLOG_CONTENT_PATH.
 */
export const getBlogEntryPath = ({ slug }: { slug: string }) => {
  return path.join(
    BLOG_CONTENT_PATH,
    // TODO: allow other extensions
    slug + ".mdx"
  );
};

/**
 * @returns An array of details for all the blog entries in the blog folder within pages.
 */
export const getStaticBlogPages = async () => {
  return Promise.all(
    dirTree(BLOG_PAGES_PATH, {
      extensions: /\.mdx/,
      attributes: ["extension"],
    }).children!.map(extractBlogEntryDetails)
  );
};
