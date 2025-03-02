import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import {
  rehypeAddAltText,
  rehypeCustomEmoji,
  ownLineFootnote,
} from "/src/utils/mdx-utils.ts";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import vercel from "@astrojs/vercel/serverless";
import expressiveCode from "astro-expressive-code";
import metaTags from "astro-meta-tags";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    expressiveCode({
      theme: ["dracula-soft"],
    }),
    mdx(),
    react(),
    metaTags(),
    icon(),
  ],
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
      ownLineFootnote,
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
    "/subscribe": "https://www.patreon.com/fujocoded",
    "/support-me": "https://www.patreon.com/fujocoded",
  },
  output: "server",
  adapter: vercel(),
  site: "https://www.essentialrandomness.com",
});
