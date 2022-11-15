import { Post } from "./contentlayer-config/posts.config";
import { Project } from "./contentlayer-config/projects.config";
import { makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
