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
  "store",
]);

export const SocialsSchema = z.string().or(
  z.object({
    name: z.string(),
    url: z.string(),
    type: WebsitesSchema.optional(),
    icon: z.string().optional(),
  })
);

export const socials = defineCollection({
  type: "data",
  schema: z.object({
    socials: z.array(SocialsSchema),
  }),
});
