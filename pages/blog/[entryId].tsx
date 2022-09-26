import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";
import {
  getBlogEntriesInContentPath,
  getBlogEntryInContentPath,
  getBlogEntryPath,
} from "../../utils/path-utils";
import { getMDXComponent, getMDXExport } from "mdx-bundler/client";

import { REMARK_PLUGINS } from "../../next.config.mjs";
import { bundleMDX } from "mdx-bundler";
import { useMemo } from "react";

const BlogEntry: NextPage<{ content: string }> = (props) => {
  console.log(props.content);
  const Content = useMemo(
    () => getMDXComponent(props.content),
    [props.content]
  );

  return <div>{<Content />}</div>;
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
  const path = getBlogEntryPath({ slug: params?.entryId as string });
  console.log(path.substring(0, path.lastIndexOf("/") + 1));
  return {
    props: {
      content: String(
        (
          await bundleMDX({
            file: path,
            cwd: path.substring(0, path.lastIndexOf("/") + 1),
            esbuildOptions(options) {
              options.define = {
                "process.env.__NEXT_MANUAL_CLIENT_BASE_PATH": JSON.stringify(
                  process.env.__NEXT_MANUAL_CLIENT_BASE_PATH
                ),
                "process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE": JSON.stringify(
                  process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE
                ),
                "process.env.__NEXT_NEW_LINK_BEHAVIOR": JSON.stringify(
                  process.env.__NEXT_NEW_LINK_BEHAVIOR
                ),
              };
              return options;
            },
          })
        ).code
      ),
    },
    revalidate: 60,
  };
};

export default BlogEntry;
