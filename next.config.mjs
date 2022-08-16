import nextMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const REMARK_PLUGINS = [remarkFrontmatter, remarkMdxFrontmatter];
const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    // Consider swapping with https://github.com/jonschlinkert/gray-matter
    remarkPlugins: REMARK_PLUGINS,
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  serverRuntimeConfig: {
    remarkPlugins: REMARK_PLUGINS,
  },
});
