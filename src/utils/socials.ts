import { getEntry } from "astro:content";
import type { SocialsData } from "../content/socials/_config";

export const getSocials = async (): Promise<SocialsData> => {
  const entry = await getEntry("socials", "msboba");
  if (!entry) {
    throw new Error('Missing "msboba" socials entry.');
  }
  return entry.data.socials;
};
