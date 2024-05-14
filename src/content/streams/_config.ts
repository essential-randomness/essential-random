import { defineCollection, z } from "astro:content";
import { parseInline, parse } from "marked";
import { Temporal } from "temporal-polyfill";

export const streams = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string().transform((title) => parseInline(title) ?? ""),
      description: z.string().transform(async (description) => {
        return (await parse(description)) ?? "";
      }),
      scheduled_at: z.date().transform((date) => {
        return new Date(
          Temporal.ZonedDateTime.from({
            timeZone: "America/Los_Angeles",
            year: date.getFullYear(),
            month: date.getUTCMonth() + 1,
            day: date.getUTCDate(),
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds(),
          }).epochMilliseconds
        );
      }),
      tags: z.array(z.string()).optional().default([]),
      cancelled: z.boolean().default(false),
    }),
});
