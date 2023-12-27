import { defineCollection, z } from "astro:content";

export const StreamsSchema = z.string().or(
  z.object({
    name: z.string(),
    url: z.string(),
    streamed_at: z.date().optional(),
  })
);

export const streams = defineCollection({
  type: "content",
  schema: StreamsSchema,
});
