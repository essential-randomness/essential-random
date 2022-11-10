"use client";

import { ArticlePreview } from "../../components/ArticlePreview";
import { ProfileNav } from "../../components/ProfileNav";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  return (
    <main className="posts">
      <ProfileNav />
      <ol>
        {allPosts.map((project) => {
          return (
            <li key={project.url}>
              {/* @ts-ignore */}
              <ArticlePreview
                url={`/${project.url}`}
                createdAt={new Date(project.created_at)}
                //  TODO: fill these
                // summary={project.body}
                // title={project}
              />
            </li>
          );
        })}
      </ol>
    </main>
  );
};
export default Blog;
