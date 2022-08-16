import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";
import { compile, runSync } from "@mdx-js/mdx";
import {
  getBlogEntriesInContentPath,
  getBlogEntryPath,
} from "../../utils/path-utils";

import getConfig from "next/config";
import { readFile } from "fs/promises";
import { useMemo } from "react";

const BlogEntry: NextPage<{ content: string }> = (props) => {
  const Content = useMemo(
    () => runSync(props.content, runtime)?.default,
    [props.content]
  );

  return <div>{Content ? <Content /> : "loading"}</div>;
};

export async function getStaticPaths() {
  const blogEntries = await getBlogEntriesInContentPath();
  return {
    paths: blogEntries?.map((entry) => ({
      params: {
        entryId: entry.slug,
      },
    })),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxFile = await readFile(
    getBlogEntryPath({ slug: params?.entryId as string }),
    { encoding: "utf8" }
  );

  const { serverRuntimeConfig } = getConfig();

  return {
    props: {
      // TODO: potentially checkout https://github.com/kentcdodds/mdx-bundler
      content: String(
        await compile(mdxFile, {
          outputFormat: "function-body",
          remarkPlugins: serverRuntimeConfig.remarkPlugins,
        })
      ),
    },
    revalidate: 60,
  };
};

export default BlogEntry;
