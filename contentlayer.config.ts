import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Link = defineNestedType(() => ({
  name: "Link",
  fields: {
    github: { type: "string" },
    npm: { type: "string" },
    web: { type: "string" },
    twitter: { type: "string" },
    tumblr: { type: "string" },
  },
}));

const DEVELOPMENT_STATUSES = [
  "Active development",
  "Pre-beta phase!",
  "Done",
] as const;

const PROJECT_TAGS = ["open source", "accepts volunteers"] as const;

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
      resolve: (post) => `${post._raw.flattenedPath}`,
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
      of: Link,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => project._raw.flattenedPath,
    },
    linksMap: {
      // TODO: figure out how to type this
      type: "json",
      resolve: (project) => {
        // We need to do Array.from because project.links is actually
        // a `PlainArr` at this stage (whatever that is), not a real array.
        return Array.from(project.links).reduce((agg, link) => {
          const nextResult = { ...agg };
          Object.entries(link)
            .filter(
              ([key, value]) =>
                key !== "type" && key !== "_raw" && value !== undefined
            )
            .forEach(([site, url]) => {
              nextResult[site] = url as string;
            });
          return nextResult;
        }, {} as Record<string, string>);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content/",
  documentTypes: [Post, Project],
});
