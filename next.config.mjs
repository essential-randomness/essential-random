import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  experimental: {
    scrollRestoration: true,
  },
});
