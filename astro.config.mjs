import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeToc from "rehype-toc";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [mdx(), react()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [rehypeToc],
  },
  redirects: {
    "/subscribe": "/support-me",
  },
});
