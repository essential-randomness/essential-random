"use client";

import { ProjectPreview } from "../../components/ProjectPreview";
import { allProjects } from "contentlayer/generated";

const Projects = () => {
  // TODO: see about getting main to get a classname equal to the path of the page,
  // or something similar
  return (
    <main className="projects">
      <ul>
        {allProjects.map((project) => {
          return (
            <li key={project.url}>
              <ProjectPreview {...project} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Projects;
