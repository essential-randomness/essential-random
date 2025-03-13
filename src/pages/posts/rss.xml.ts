import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { loadPosts } from "../../utils/posts-utils";

export async function GET(context: APIContext) {
  const posts = await loadPosts();

  return new Response();
  // return rss({
  //   // `<title>` field in output xml
  //   title: "Essential Randomness",
  //   // `<description>` field in output xml
  //   description: "A blog about tech, fandom and the web.",
  //   // Pull in your project "site" from the endpoint context
  //   // https://docs.astro.build/en/reference/api-reference/#contextsite
  //   site: context.site!,
  //   // Array of `<item>`s in output xml
  //   // See "Generating items" section for examples using content collections and glob imports
  //   items: posts.map((post) => ({
  //     title: post.data.og_title ?? post.data.title,
  //     pubDate: post.data.created_at,
  //     description: post.data.og_description,
  //     categories: post.data.tags,
  //     // customData: post.data.customData,
  //     link: `/posts/${post.slug}/`,
  //   })),
  //   // (optional) inject custom xml
  //   customData: `<language>en-us</language>`,
  // });
}
