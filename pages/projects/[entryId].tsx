import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next/types";
import { compile, runSync } from "@mdx-js/mdx";
import {
  getProjectEntryFilesystemPath,
  getProjectsInContentPath,
} from "../../utils/projects-utils";

import { REMARK_PLUGINS } from "../../next.config.mjs";
import { readFile } from "fs/promises";
import { useMemo } from "react";

const ProjectEntry: NextPage<{ content: string }> = (props) => {
  const Content = useMemo(
    () => runSync(props.content, runtime)?.default,
    [props.content]
  );

  return <div>{Content ? <Content /> : "loading"}</div>;
};

export async function getStaticPaths() {
  const projectEntries = await getProjectsInContentPath();
  return {
    paths: projectEntries?.map((entry) => ({
      params: {
        entryId: entry.slug,
      },
    })),
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxFile = await readFile(
    getProjectEntryFilesystemPath({ slug: params?.entryId as string }),
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

export default ProjectEntry;
