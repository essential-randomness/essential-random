import { rehypeExtractTitle, rehypeRemoveTitle } from "./mdx-utils";

import { REMARK_PLUGINS } from "../next.config.mjs";
import { compile } from "@mdx-js/mdx";
import dirTree from "directory-tree";
import dynamic from "next/dynamic";
import matter from "gray-matter";
import path from "path";
import { readFile } from "fs/promises";
// @ts-expect-error
import rehypeTruncate from "rehype-truncate";
import yaml from "js-yaml";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");
const BLOG_PAGES_PATH = path.join(process.cwd(), "/pages/blog/");

// TODO: figure out whether it's possible to do all this extraction in a single pass
// and get the information without having to recompile all the time
const extractBlogEntryTitle = async ({
  file,
  path,
}: {
  file: string;
  path: string;
}) => {
  console.log(import.meta);
  return String(
    await compile(file, {
      outputFormat: "function-body",
      remarkPlugins: REMARK_PLUGINS,
      rehypePlugins: [rehypeExtractTitle],
      useDynamicImport: true,
      baseUrl:
        import.meta.resolve + path.substring(64, path.lastIndexOf("/") + 1),
    })
  );
};

const extractBlogEntrySummary = async ({
  file,
  path,
}: {
  file: string;
  path: string;
}) => {
  console.log(import.meta.url + path.substring(64, path.lastIndexOf("/") + 1));
  console.log(process.cwd());
  return String(
    await compile(file, {
      outputFormat: "function-body",
      remarkPlugins: REMARK_PLUGINS,
      rehypePlugins: [rehypeRemoveTitle, rehypeTruncate],
      useDynamicImport: true,
      baseUrl:
        "http://localhost:3000" + path.substring(64, path.lastIndexOf("/") + 1),
    })
  );
};

const extractBlogEntryDetails = async (
  blogEntry: ReturnType<typeof dirTree>
) => {
  const file = await readFile(blogEntry.path, { encoding: "utf8" });
  const frontmatter = matter(file);

  return {
    slug: blogEntry.name.slice(0, -(blogEntry.extension?.length || 0)),
    createdAt: new Date((frontmatter.data as any).created_at),
    compiledSummary: await extractBlogEntrySummary({
      file,
      path: blogEntry.path,
    }),
    compiledTitle: await extractBlogEntryTitle({ file, path: blogEntry.path }),
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
