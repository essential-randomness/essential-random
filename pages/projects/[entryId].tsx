import * as runtime from "react/jsx-runtime";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { compile, runSync } from "@mdx-js/mdx";
import {
  getAdjacentProjects,
  getProjectEntryFilesystemPath,
  getProjectsInContentPath,
} from "../../utils/projects-utils";

import Link from "next/link";
import { Nav } from "../../components/Nav";
import { ProjectLinks } from "../../components/ProjectPreview";
import { REMARK_PLUGINS } from "../../next.config.mjs";
import { readFile } from "fs/promises";
import { useMemo } from "react";

const ProjectEntry: NextPage<
  { content: string } & Awaited<ReturnType<typeof getAdjacentProjects>>
> = (props) => {
  const Content = useMemo(
    () => runSync(props.content, runtime)?.default,
    [props.content]
  );

  return (
    <>
      <Nav />
      <main className="project">
        <h1>{props.curr.name}</h1>
        <dl>
          <ProjectLinks links={props.curr.links} />
        </dl>
        {Content ? <Content /> : "loading"}
        {props.prev && (
          <div className="prev">
            Previous project:
            <Link href={props.prev.url}>
              <a>{props.prev.name}</a>
            </Link>
          </div>
        )}
        {props.next && (
          <div className="next">
            Next project:
            <Link href={props.next.url}>
              <a>{props.next.name}</a>
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectEntries = await getProjectsInContentPath();
  return {
    paths: projectEntries?.map((entry) => ({
      params: {
        entryId: entry.slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.entryId as string;
  const mdxFile = await readFile(getProjectEntryFilesystemPath({ slug }), {
    encoding: "utf8",
  });

  return {
    props: {
      // TODO: potentially checkout https://github.com/kentcdodds/mdx-bundler
      content: String(
        await compile(mdxFile, {
          outputFormat: "function-body",
          remarkPlugins: REMARK_PLUGINS,
          useDynamicImport: true,
        })
      ),
      ...(await getAdjacentProjects({ slug })),
    },
    revalidate: 60,
  };
};

export default ProjectEntry;
