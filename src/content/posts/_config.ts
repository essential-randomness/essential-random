import { defineCollection, z } from "astro:content";
import { parseInline } from "marked";

export const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().transform((title) => parseInline(title) ?? ""),
      tagline: z.string().optional(),
      created_at: z.date(),
      unlisted: z.boolean().optional().default(false),
      tags: z
        .array(z.string().transform((tag) => tag.substring(1)))
        .optional()
        .default([]),
      og_image: image().optional(),
      og_description: z
        .string()
        .optional()
        .transform((text) => text?.replaceAll("\n", " ").trim()),
      og_title: z.string().optional(),
      status: z.enum(["rough-draft", "pre-beta"]).optional(),
    }),
});
