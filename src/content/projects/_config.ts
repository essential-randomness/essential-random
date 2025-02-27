import { defineCollection, z, type SchemaContext } from "astro:content";

import { SocialsSchema } from "../socials/_config";

const ProjectSchema = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    links: z.array(SocialsSchema),
    description: z.string(),
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
