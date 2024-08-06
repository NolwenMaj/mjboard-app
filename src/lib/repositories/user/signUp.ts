"use server";
import prisma from "@/lib/repositories/prisma";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./getUserByEmail";

const signUp = async (email: string, password: string) => {
  if (!email) {
    throw new Error("L'email est requis");
  }

  if ((await getUserByEmail(email)) != null) {
    return "Inscription impossible";
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });

  return "Inscription réussie";
};

export default signUp;
