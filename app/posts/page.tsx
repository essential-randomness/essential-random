"use client";

import "./posts.css";

import { ArticlePreview } from "../../components/ArticlePreview";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  return (
    <ol>
      {allPosts.map((post) => {
        return (
          <li key={post.url}>
            <ArticlePreview
              url={`/${post.url}`}
              createdAt={new Date(post.created_at)}
              summary={post.summary}
              categories={post.categories}
              whispertags={post.whispertags}
              title={post.title!}
              _data={post}
            />
          </li>
        );
      })}
    </ol>
  );
};
export default Blog;
