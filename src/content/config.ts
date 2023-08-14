import { defineCollection, z } from "astro:content";

const WebsitesSchema = z.enum([
  "github",
  "tumblr",
  "twitter",
  "npm",
  "web",
  "twitch",
  "mastodon",
  "dreamwidth",
]);

const SocialsSchema = z.string().or(
  z.object({
    name: z.string(),
    url: z.string(),
    type: WebsitesSchema.optional(),
    icon: z.string().optional(),
  })
);

const ProjectSchema = z.object({
  name: z.string(),
  links: z.array(SocialsSchema),
  description: z.string(),
  status: z.string(),
  preview: z.string(),
  tags: z.array(z.string()),
});
export type Project = z.infer<typeof ProjectSchema>;

const projects = defineCollection({
  type: "content",
  schema: ProjectSchema,
});

const socials = defineCollection({
  type: "data",
  schema: z.object({
    socials: z.array(SocialsSchema),
  }),
});

export const collections = {
  socials,
  projects,
};
