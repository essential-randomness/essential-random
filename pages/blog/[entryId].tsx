import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";
import { compile, runSync } from "@mdx-js/mdx";

import dirTree from "directory-tree";
import path from "path";
import { readFile } from "fs/promises";
import { useMemo } from "react";

const BLOG_CONTENT_PATH = path.join(process.cwd(), "/content/blog/");

const BlogEntry: NextPage<{ content: string }> = (props) => {
  const Content = useMemo(
    () => runSync(props.content, runtime)?.default,
    [props.content]
  );

  return <div>{Content ? <Content /> : "loading"}</div>;
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
  const mdxFile = await readFile(
    path.join(
      BLOG_CONTENT_PATH,
      // TODO: allow other extensions
      (params as { entryId: string }).entryId + ".mdx"
    ),
    { encoding: "utf8" }
  );

  // TODO: potentially checkout https://github.com/kentcdodds/mdx-bundler
  const content = String(
    await compile(mdxFile, {
      outputFormat: "function-body",
    })
  );

  return {
    props: {
      content,
    },
  };
};

export default BlogEntry;
