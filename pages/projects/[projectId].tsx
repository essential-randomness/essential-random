import type { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { Project, allProjects } from "contentlayer/generated";
import { ProjectLinks, ProjectLinksMap } from "../../components/ProjectPreview";

import Link from "next/link";
import { Nav } from "../../components/Nav";
import { useMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

const ProjectEntry: NextPage<PageProps> = ({ project, prev, next }) => {
  const MDXContent = useMDXComponent(project.body.code, project);

  return (
    <>
      <Nav />
      <main className="project">
        <h1>{project.name}</h1>
        <dl>
          <ProjectLinks links={project.linksMap as ProjectLinksMap} />
        </dl>
        <MDXContent />
        {prev && (
          <div className="prev">
            Previous project:
            <Link href={`/${prev.url}`}>{prev.name}</Link>
          </div>
        )}
        {next && (
          <div className="next">
            Next project:
            <Link href={`/${next.url}`}>{next.name}</Link>
          </div>
        )}
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((project) => ({
      params: {
        projectId: project.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectId = params?.projectId as string;
  const projectIndex = allProjects.findIndex(
    (project) => project.id === projectId
  );
  if (projectIndex == -1) {
    throw new Error(
      `Project with projectId "${projectId}" not found. Available projectId values are: ${allProjects.map(
        (project) => project.id
      )}`
    );
  }
  return {
    props: {
      project: allProjects[projectIndex],
      prev: projectIndex > 0 ? allProjects[projectIndex - 1] : null,
      next:
        projectIndex !== allProjects.length - 1
          ? allProjects[projectIndex + 1]
          : null,
    } as PageProps,
    revalidate: 60,
  };
};

export default ProjectEntry;
