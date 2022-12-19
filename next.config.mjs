import { withContentlayer } from "next-contentlayer";
import withYaml from "next-plugin-yaml";

export default withYaml(
  withContentlayer({
    experimental: {
      scrollRestoration: true,
      appDir: true,
    },
  })
);
