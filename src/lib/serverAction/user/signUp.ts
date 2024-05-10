"use server";
import prisma from "@/lib/serverAction/prisma";
import bcrypt from "bcryptjs";

export const signUp = async (email: string, password: string) => {
  if (!email) {
    throw new Error("L'email est requis");
  }

  const isUserExisting = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUserExisting) {
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
