import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    created_at: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) =>
        `/content/${post._raw.flattenedPath.substring("blog/".length)}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the project",
      required: true,
    },
    links: {
      type: "json",
      description: "The links to the project",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/projects/${project._raw.flattenedPath}`,
    },
    title: {
      type: "string",
      resolve: (post) => console.log(Object.keys(post.body.raw)),
    },
  },
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project],
});
