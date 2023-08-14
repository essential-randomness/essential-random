// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const websitesSchema = z.enum([
  "github",
  "tumblr",
  "twitter",
  "npm",
  "web",
  "twitch",
  "mastodon",
  "dreamwidth",
]);

const socials = defineCollection({
  type: "data", // v2.5.0 and later
  schema: z.object({
    socials: z.array(
      z.string().or(
        z.object({
          name: z.string(),
          url: z.string(),
          type: websitesSchema.optional(),
        })
      )
    ),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  socials,
};
