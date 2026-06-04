import { defineCollection, z, type SchemaContext } from "astro:content";
import { parseInline } from "marked";

import { SocialsSchema } from "../socials/_config";

const ProjectSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    links: SocialsSchema,
    description: z
      .string()
      .transform((description) => parseInline(description) ?? ""),
    status: z.string(),
    preview: image(),
    tags: z.array(z.string()),
    position: z.number().optional().default(Infinity),
  });

export type Project = z.infer<ReturnType<typeof ProjectSchema>>;

export const projects = defineCollection({
  type: "content",
  schema: ProjectSchema,
});
