import { defineCollection, z } from "astro:content";

export const posts = defineCollection({
  type: "content",
  schema: z.object({
    created_at: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});
