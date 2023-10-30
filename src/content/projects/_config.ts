import { defineCollection, z } from "astro:content";

import { SocialsSchema } from "../socials/_config";

const ProjectSchema = z.object({
  name: z.string(),
  links: z.array(SocialsSchema),
  description: z.string(),
  status: z.string(),
  preview: z.string(),
  tags: z.array(z.string()),
});

export const projects = defineCollection({
  type: "content",
  schema: ProjectSchema,
});
