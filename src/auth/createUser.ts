// pages/api/signup.ts
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db } from "../db";
import { users } from "../db/schema";

const userId = generateId(15);
const hashedPassword = await new Argon2id().hash("blorbos");

export const createUser = async () =>
  await db.insert(users).values({
    id: userId,
    username: "bobatan",
    hashed_password: hashedPassword,
  });
