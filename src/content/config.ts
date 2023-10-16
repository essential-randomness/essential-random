import { defineCollection, z } from "astro:content";

import { posts } from "./posts/_config";

const WebsitesSchema = z.enum([
  "github",
  "tumblr",
  "twitter",
  "npm",
  "web",
  "twitch",
  "mastodon",
  "dreamwidth",
  "store",
]);

const SocialsSchema = z.string().or(
  z.object({
    name: z.string(),
    url: z.string(),
    type: WebsitesSchema.optional(),
    icon: z.string().optional(),
  })
);

export const ProjectSchema = z.object({
  name: z.string(),
  links: z.array(SocialsSchema),
  description: z.string(),
  status: z.string(),
  preview: z.string(),
  tags: z.array(z.string()),
});
export type Project = z.infer<typeof ProjectSchema>;

const FaqSchema = z.object({
  title: z.string(),
  order: z.number(),
  draft: z.boolean().optional(),
});

export const collections = {
  socials: defineCollection({
    type: "data",
    schema: z.object({
      socials: z.array(SocialsSchema),
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: ProjectSchema,
  }),
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
  posts,
};
