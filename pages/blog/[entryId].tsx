import type { GetStaticProps, NextPage } from "next";

import dirTree from "directory-tree";
import path from "path";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");

const BlogEntry: NextPage<{ content: string }> = (props) => {
  return <div>{props.content}</div>;
};

export async function getStaticPaths() {
  const blogEntries = dirTree(BLOG_CONTENT_PATH, {
    extensions: /\.mdx/,
    attributes: ["extension"],
  });
  return {
    paths: blogEntries.children?.map((blogEntry) => ({
      params: {
        entryId: blogEntry.name.slice(0, -(blogEntry.extension?.length || 0)),
      },
    })),

    // TODO: find the right value here
    fallback: false, // can also be true or 'blocking'
  };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(
    path.join(
      BLOG_CONTENT_PATH,
      // TODO: allow other extensions
      (params as { entryId: string }).entryId + ".mdx"
    )
  );
  return {
    props: {
      page: content,
    },
  };
};

export default BlogEntry;
