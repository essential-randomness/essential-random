import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  return context.redirect("https://patreon.com/fujocoded", 307);
};
