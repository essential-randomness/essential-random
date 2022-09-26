import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";
import { compile, runSync } from "@mdx-js/mdx";
import {
  getBlogEntriesInContentPath,
  getBlogEntryPath,
} from "../../utils/path-utils";

import { Nav } from "../../components/Nav";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";
import { REMARK_PLUGINS } from "../../next.config.mjs";
import { readFile } from "fs/promises";
import { useMemo } from "react";

const BlogEntry: NextPage<{ content: string }> = (props) => {
  const Content = useMemo(
    () => runSync(props.content, runtime)?.default,
    [props.content]
  );

  return (
    <>
      <Nav />
      <div className="profile">
        <ProfileCard />
        <ProfileNav />
      </div>
      <main>{Content ? <Content /> : "loading"}</main>
    </>
  );
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

  return {
    props: {
      // TODO: potentially checkout https://github.com/kentcdodds/mdx-bundler
      content: String(
        await compile(mdxFile, {
          outputFormat: "function-body",
          remarkPlugins: REMARK_PLUGINS,
        })
      ),
    },
    revalidate: 60,
  };
};

export default BlogEntry;
