import dirTree from "directory-tree";
import path from "path";
import { readFile } from "fs/promises";
import yaml from "js-yaml";

const PROJECTS_CONTENT_PATH = path.join(process.cwd(), "/content/projects/");

/**
 * @returns An array of details for all the blog entries in BLOG_CONTENT_PATH.
 */
export const getProjectsInContentPath = async () => {
  return Promise.all(
    dirTree(PROJECTS_CONTENT_PATH, {
      extensions: /\.mdx/,
      attributes: ["extension"],
    }).children!.map(extractProjectDetails)
  );
};

type EXTERNAL_LINKS_TYPES = "github" | "web" | "twitter";

export interface ProjectFrontmatter {
  name: string;
  description: string;
  status: string;
  preview: string;
  tags: string[];
  links: Record<EXTERNAL_LINKS_TYPES, string>;
}

const extractProjectDetails = async (
  projectEntry: ReturnType<typeof dirTree>
) => {
  const file = await readFile(projectEntry.path, { encoding: "utf8" });
  const frontmatter = yaml.loadAll(file)[0] as ProjectFrontmatter & {
    links: Record<EXTERNAL_LINKS_TYPES, string>[];
  };

  const slug = projectEntry.name.slice(
    0,
    -(projectEntry.extension?.length || 0)
  );
  return {
    url: `/projects/${slug}`,
    slug,
    ...frontmatter,
    links: frontmatter.links.reduce((agg, link) => {
      return {
        ...agg,
        ...link,
      };
    }, {} as ProjectFrontmatter["links"]),
  };
};
