import dirTree from "directory-tree";
import path from "path";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");

/**
 * @returns An array of details for all the blog entries in BLOG_CONTENT_PATH.
 */
export const getBlogEntriesInContentPath = () => {
  return dirTree(BLOG_CONTENT_PATH, {
    extensions: /\.mdx/,
    attributes: ["extension"],
  }).children?.map((blogEntry) => ({
    slug: blogEntry.name.slice(0, -(blogEntry.extension?.length || 0)),
  }));
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
