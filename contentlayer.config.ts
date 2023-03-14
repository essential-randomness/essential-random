import { Post } from "./contentlayer-config/posts.config";
import { Project } from "./contentlayer-config/projects.config";
import { Testimonials } from "./contentlayer-config/testimonials.config";
import { makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project, Testimonials],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
