import "./posts.css";

import { PostPreview } from "../../src/components/PostPreview";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
  return (
    <ol>
      {allPosts.map((post) => {
        return (
          <li key={post.url}>
            <PostPreview
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
