import { defineCollection, z } from "astro:content";

export const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    created_at: z.date().optional(),
    unlisted: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});
