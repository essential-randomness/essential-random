import { defineCollection, z, type SchemaContext } from "astro:content";
import { parseInline } from "marked";
import { SocialsSchema } from "../socials/_config";
const toMarkdown = (text: string) => parseInline(text) ?? "";

const OgSchema = ({ image }: SchemaContext) =>
  z.object({
    og_image: image().optional(),
    og_description: z
      .string()
      .optional()
      .transform((text) => text?.replaceAll("\n", " ").trim()),
    og_title: z.string().optional(),
  });

export const posts = defineCollection({
  type: "content",
  schema: (context) =>
    z
      .object({
        title: z.string().transform(toMarkdown),
        tagline: z.string().optional(),
        created_at: z.date(),
        recorded_at: z.date().optional(),
        unlisted: z.boolean().optional().default(false),
        tags: z.array(z.string()).optional().default([]),
        status: z.enum(["rough-draft", "pre-beta"]).optional(),
        socials: SocialsSchema.default([]),
      })
      .merge(OgSchema(context)),
});
