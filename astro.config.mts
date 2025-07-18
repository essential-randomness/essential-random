import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { rehypeCustomEmoji, ownLineFootnote } from "./src/utils/mdx-utils.ts";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import vercel from "@astrojs/vercel";
import expressiveCode from "astro-expressive-code";
import metaTags from "astro-meta-tags";
import remarkAltTextFiles from "@fujocoded/remark-alt-text-files";
import icon from "astro-icon";
import type { Element, Parents } from "hast";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [
    expressiveCode({
      themes: ["dracula-soft"],
    }),
    mdx(),
    react(),
    metaTags(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkAltTextFiles],
    rehypePlugins: [
      ownLineFootnote,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
      // @ts-expect-error - TODO: fix this
      [
        rehypeToc,
        {
          customizeTOC: (toc: Element) => {
            if ((toc.children[0] as Parents).children?.length > 0) {
              return toc;
            }
            return false;
          },
          customizeTOCItem: (toc: Element, heading: Element) => {
            const headingContent = heading.children?.[0] as Element;
            if (headingContent.children.length > 1) {
              (toc.children[0] as Element).children =
                headingContent.children.filter(
                  (node) => node.type !== "element" || node.tagName !== "sup"
                );
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
    ],
  },
  redirects: {
    // TODO: Reactivate these and delete the pages when
    // the vercel adapter bug is fixed
    // "/subscribe": {
    //   destination: "https://patreon.com/fujocoded",
    //   status: 307,
    // },
    // "/support-me": {
    //   destination: "https://patreon.com/fujocoded",
    //   status: 307,
    // },
    "/hire-me": {
      destination: "/resume",
      status: 307,
    },
  },
  output: "server",
  adapter: vercel(),
  site: "https://www.essentialrandomness.com/",
});
