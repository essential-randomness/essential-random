"use client";

import "./posts.css";

import { ArticlePreview } from "../../components/ArticlePreview";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  return (
    <ol>
      {allPosts.map((project) => {
        return (
          <li key={project.url}>
            {/* @ts-ignore */}
            <ArticlePreview
              url={`/${project.url}`}
              createdAt={new Date(project.created_at)}
              //  TODO: fill these
              summary={project._raw.sourceFileName}
              title={project.title}
            />
          </li>
        );
      })}
    </ol>
  );
};
export default Blog;
