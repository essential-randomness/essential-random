"use client";

import { Project, allProjects } from "contentlayer/generated";
import {
  ProjectLinks,
  ProjectLinksMap,
} from "../../../components/ProjectPreview";

import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  curr: Project;
  prev: Project | null;
  next: Project | null;
}

interface PageParams {
  params: {
    projectId: string;
  };
}
const ProjectEntry = ({ params }: PageParams) => {
  const { projectId } = params;
  // TODO: we probably need a server route for this
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
  const { curr, prev, next } = {
    curr: allProjects[projectIndex],
    prev: projectIndex > 0 ? allProjects[projectIndex - 1] : null,
    next:
      projectIndex !== allProjects.length - 1
        ? allProjects[projectIndex + 1]
        : null,
  };
  const MDXContent = useMDXComponent(curr.body.code, curr);

  return (
    <main className="project">
      <h1>{curr.name}</h1>
      <dl>
        <ProjectLinks links={curr.linksMap as ProjectLinksMap} />
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
  );
};

export default ProjectEntry;

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id,
  }));
}
