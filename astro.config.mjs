import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeCustomEmoji from "rehype-custom-emoji";
import rehypeToc from "rehype-toc";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [mdx(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
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
