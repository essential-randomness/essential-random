import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

console.log(import.meta.env.TURSO_DB_LOGIN);
const client = createClient({
  url: import.meta.env.TURSO_DB_LOGIN!,
  authToken: import.meta.env.TURSO_DB_AUTH,
});

export const db = drizzle(client);
