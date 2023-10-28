/**
 * @typedef {import('hast').ElementContent} ElementContent
 */

import { defineConfig } from "astro/config";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCustomEmoji from "rehype-custom-emoji";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [mdx(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      rehypeToc,
      [
        rehypeCustomEmoji,
        {
          emojis: {
            bobaparty: "/emojis/bobaparty.png",
            bobatwt: "/emojis/bobatwt.png",
            bobaeyes: "/emojis/bobaeyes.png",
          },
          className: "custom-emoji",
        },
      ],
    ],
  },
  redirects: {
    "/subscribe": "/support-me",
  },
});
