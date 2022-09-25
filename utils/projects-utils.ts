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

/**
 * @returns get the filename path for the project with the given slug
 */
export const getProjectEntryFilesystemPath = ({ slug }: { slug: string }) => {
  return path.join(
    PROJECTS_CONTENT_PATH,
    // TODO: allow other extensions
    slug + ".mdx"
  );
};

/**
 * @returns get the projects before/after the given slug
 */
export const getAdjacentProjects = async ({ slug }: { slug: string }) => {
  const projects = await getProjectsInContentPath();
  const projectIndex = projects.findIndex((project) => project.slug == slug);
  if (projectIndex == -1) {
    throw new Error(`Project ${slug} does not exist.`);
  }
  return {
    prev: projectIndex > 0 ? projects[projectIndex - 1] : null,
    curr: projects[projectIndex],
    next:
      projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null,
  };
};
