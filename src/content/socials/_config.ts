import { defineCollection, z } from "astro:content";
import {
  createSocialsTransformer,
  type SocialLinkData,
} from "@fujocoded/zod-transform-socials";

const {
  SocialsSchema: SocialLinkSchema,
  transformSocial,
} = createSocialsTransformer({
  domains: {
    mastodon: ["indiepocalypse.social"],
  },
});

// The plugin builds this schema as `string URL | object`, so there is no single
// Zod object to extend with `.extend()`. Intersecting it with this passthrough
// object keeps the plugin's validation while allowing local content to provide
// an optional display label.
const SocialLinkInput = z.union([
  z.object({ label: z.string().optional() }).passthrough().and(SocialLinkSchema),
  SocialLinkSchema,
]);

const getSocialLabel = (social: SocialLinkData) => {
  if (social.platform !== "custom") {
    return social.platform;
  }

  if (social.username) {
    return social.username;
  }

  const { host } = new URL(social.url);
  return host
    .substring(host.startsWith("www.") ? 4 : 0, host.lastIndexOf("."))
    .toLowerCase();
};

export const SocialsSchema = z
  .array(SocialLinkInput)
  .transform((socials) =>
    socials.map((social) => {
      const transformed = transformSocial(social);
      const label = typeof social === "string" ? undefined : social.label;

      // Add the render label at the collection boundary so components can treat
      // it as content data instead of re-deriving it while rendering.
      return {
        ...transformed,
        label: label ?? getSocialLabel(transformed),
      };
    })
  )
  .default([]);

export type SocialsData = z.infer<typeof SocialsSchema>;
export type Social = SocialsData[number];

export const socials = defineCollection({
  type: "data",
  schema: z.object({
    socials: SocialsSchema,
  }),
});
