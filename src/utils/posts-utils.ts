import { getCollection } from "astro:content";

export const loadPosts = async () => {
  const posts = [
    ...(await getCollection("posts", (post) => !post.data.unlisted)),
  ].sort((elementA, elementB) => {
    return (
      elementB.data.created_at.valueOf() - elementA.data.created_at.valueOf()
    );
  });

  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      tags:
        post.slug == "extravaganzas" || post.slug.includes("extravaganzas/")
          ? ["extravaganza", ...post.data.tags]
          : post.data.tags,
    },
  }));
};
