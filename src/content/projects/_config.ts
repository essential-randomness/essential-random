import { defineCollection, z, type SchemaContext } from "astro:content";

import { SocialsSchema } from "../socials/_config";

const ProjectSchema = ({ image }: SchemaContext) =>
  z
    .object({
      name: z.string(),
      links: z.array(SocialsSchema),
      description: z.string(),
      status: z.string(),
      preview: image(),
      tags: z.array(z.string()),
      splitTags: z.record(z.string().array()).default({}),
    })
    .transform((object) => {
      object.splitTags = {};
      for (const tag of object.tags) {
        const split = tag.split(/^([^:]+):/gm).filter((s) => s.length > 0);
        if (split.length == 1) {
          continue;
        }
        const [category, value] = split;
        if (!object.splitTags[category]) {
          object.splitTags[category] = [value.trim()];
        } else {
          object.splitTags[category].push(value.trim());
        }
      }
      return object;
    });

export type Project = z.infer<ReturnType<typeof ProjectSchema>>;

export const projects = defineCollection({
  type: "content",
  schema: ProjectSchema,
});
