import { Nav } from "../../components/Nav";
import type { NextPage } from "next/types";
import { ProjectPreview } from "../../components/ProjectPreview";
import { allProjects } from "contentlayer/generated";

const Projects: NextPage = () => {
  return (
    <>
      <Nav />
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
    </>
  );
};
export default Projects;
