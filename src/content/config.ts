import { defineCollection, z } from "astro:content";

import { posts } from "./posts/_config";
import { projects } from "./projects/_config";
import { socials } from "./socials/_config";
import { streams } from "./streams/_config";

const FaqSchema = z.object({
  title: z.string(),
  order: z.number(),
  draft: z.boolean().optional(),
  success: z.boolean().default(false),
});

export const collections = {
  faqs: defineCollection({
    type: "content",
    schema: FaqSchema,
  }),
  testimonials: defineCollection({
    type: "content",
    schema: z.object({
      highlight: z.boolean().optional(),
      order: z.number().optional(),
      hidden: z.boolean().optional(),
    }),
  }),
  socials,
  posts,
  projects,
  streams,
};
