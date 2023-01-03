"use client";

import "./project.css";

import { Project, allProjects } from "contentlayer/generated";

import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "components/SocialLinks";
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
  const projectsWithDetails = allProjects.filter(
    (project) => project.body.raw.length > 0
  );
  // TODO: we probably need a server route for this
  const projectIndex = projectsWithDetails.findIndex(
    (project) => project.id === projectId
  );
  if (projectIndex == -1) {
    throw new Error(
      `Project with projectId "${projectId}" not found. Available projectId values are: ${projectsWithDetails.map(
        (project) => project.id
      )}`
    );
  }
  const { curr, prev, next } = {
    curr: projectsWithDetails[projectIndex],
    prev: projectIndex > 0 ? projectsWithDetails[projectIndex - 1] : null,
    next:
      projectIndex !== projectsWithDetails.length - 1
        ? projectsWithDetails[projectIndex + 1]
        : null,
  };
  const MDXContent = useMDXComponent(curr.body.code, curr);

  return (
    <main className="project">
      <article>
        <h1>{curr.name}</h1>
        <picture className="centered">
          <Image
            src={curr.preview}
            alt={`${curr.name}'s project preview image`}
            layout="fill"
          />
        </picture>
        <SocialLinks links={curr.links} />
        <MDXContent />
      </article>
      <nav className="prev-next">
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
      </nav>
    </main>
  );
};

export default ProjectEntry;

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    projectId: project.id,
  }));
}
