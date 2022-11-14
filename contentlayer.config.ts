import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const DEVELOPMENT_STATUSES = [
  "Active development",
  "Pre-beta phase!",
  "Done",
] as const;

const PROJECT_TAGS = ["open source", "accepts volunteers"] as const;

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
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
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    id: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.substring("posts/".length),
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
    preview: {
      type: "string",
      description: "The url of the project preview image",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true,
    },
    status: {
      type: "enum",
      options: DEVELOPMENT_STATUSES,
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "enum",
        // TODO: file issue because this does not seem to work
        options: PROJECT_TAGS,
      },
      required: true,
    },
    links: {
      type: "list",
      description: "The links to the project",
      required: true,
      of: { type: "string" },
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (project) =>
        project._raw.flattenedPath.substring("projects/".length),
    },
    url: {
      type: "string",
      resolve: (project) => project._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project],
});
