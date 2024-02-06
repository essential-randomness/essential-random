import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DB_LOGIN!,
    authToken: process.env.TURSO_DB_AUTH,
  },
});
