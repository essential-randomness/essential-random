import * as runtime from "react/jsx-runtime";

import { ArticlePreview } from "../../components/ArticlePreview";
import { Nav } from "../../components/Nav";
import type { NextPage } from "next";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";
import { allPosts } from "contentlayer/generated";
import { runSync } from "@mdx-js/mdx";

const Blog: NextPage<{}> = () => {
  return (
    <>
      <Nav />
      <div className="profile">
        <ProfileCard />
        <ProfileNav />
      </div>
      <main>
        <ol>
          {allPosts.map((project) => {
            return (
              <li key={project.url}>
                <ArticlePreview
                  url={`/${project.url}`}
                  createdAt={new Date(project.created_at)}
                  // TODO: fill these
                  summary={project.body}
                  title={project}
                />
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
};
export default Blog;
