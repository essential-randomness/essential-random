import { auth } from "../../auth";
import { Argon2id } from "oslo/password";

import type { APIContext } from "astro";
import { db } from "../../db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function POST(context: APIContext): Promise<Response> {
  const formData = await context.request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const existingUser = (
    await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1)
      .execute()
  )[0];

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password!,
    password
  );
  console.log(validPassword);
  if (!validPassword) {
    return new Response("Incorrect username or password", {
      status: 400,
    });
  }

  const session = await auth.createSession(existingUser.id, {});
  const sessionCookie = auth.createSessionCookie(session.id);
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return context.redirect("/");
}
