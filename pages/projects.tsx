import type { GetStaticProps, NextPage } from "next/types";

import { Nav } from "../components/Nav";
import { ProfileCard } from "../components/ProfileCard";
import { ProfileNav } from "../components/ProfileNav";
import { ProjectPreview } from "../components/ProjectPreview";
import { getProjectsInContentPath } from "../utils/projects-utils";

const Blog: NextPage<{
  paths: Awaited<ReturnType<typeof getProjectsInContentPath>>;
}> = ({ paths }) => {
  return (
    <>
      <Nav />
      {/* <div className="profile">
        <ProfileCard />
      </div> */}
      <main className="projects">
        <ol>
          {paths.map((project) => {
            return (
              <li key={project.url}>
                <ProjectPreview {...project} />
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
};
export default Blog;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      paths: await getProjectsInContentPath(),
    },
  };
};
