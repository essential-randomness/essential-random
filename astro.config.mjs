/**
 * @typedef {import('hast').ElementContent} ElementContent
 */

import { defineConfig } from "astro/config";
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { rehypeAddAltText, rehypeCustomEmoji } from "/src/utils/mdx-utils.ts";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeCustomEmoji from "rehype-custom-emoji";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";

import vercel from "@astrojs/vercel/static";

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
      [
        rehypeToc,
        {
          customizeTOC: (toc) => {
            if (toc.children[0].children?.length > 0) {
              return toc;
            }
            return false;
          },
          customizeTOCItem: (toc, heading) => {
            const headingContent = heading.children?.[0];
            if (headingContent.children.length > 1) {
              toc.children[0].children = headingContent.children;
            }
            return toc;
          },
        },
      ],
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
      rehypeAddAltText,
    ],
  },
  redirects: {
    "/subscribe": "/support-me",
  },
  output: "hybrid",
  adapter: vercel(),
});
