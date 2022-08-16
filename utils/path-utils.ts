import dirTree from "directory-tree";
import path from "path";
import { readFile } from "fs/promises";
import yaml from "js-yaml";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");
const BLOG_PAGES_PATH = path.join(process.cwd(), "/pages/blog/");

const extractBlogEntryDetails = async (
  blogEntry: ReturnType<typeof dirTree>
) => {
  const file = await readFile(blogEntry.path, { encoding: "utf8" });
  const frontmatter = yaml.loadAll(file);
  return {
    slug: blogEntry.name.slice(0, -(blogEntry.extension?.length || 0)),
    createdAt: new Date((frontmatter[0] as any).created_at),
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
