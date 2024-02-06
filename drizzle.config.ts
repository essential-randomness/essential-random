import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: ".src/db/schema.ts",
  out: ".src/db/drizzle",
  driver: "turso",
  dbCredentials: {
    url: import.meta.env.TURSO_DB_LOGIN!,
    authToken: import.meta.env.TURSO_DB_AUTH,
  },
});
