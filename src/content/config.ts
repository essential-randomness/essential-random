import { defineCollection, z } from "astro:content";

import { posts } from "./posts/_config";
import { projects } from "./projects/_config";
import { socials } from "./socials/_config";

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
    type: "data",
    schema: z.object({
      testimonials: z.array(
        z.object({
          message: z.string(),
        })
      ),
    }),
  }),
  socials,
  posts,
  projects,
};
