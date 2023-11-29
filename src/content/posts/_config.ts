import { defineCollection, z } from "astro:content";

export const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().optional(),
      created_at: z.date(),
      unlisted: z.boolean().optional().default(false),
      tags: z.array(z.string()).optional().default([]),
      og_image: image().optional(),
      og_description: z.string().optional(),
    }),
});
z;
