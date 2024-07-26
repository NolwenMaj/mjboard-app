"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Journal } from "@/lib/types";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export const postJournal = async (input: {
  content: string;
}): Promise<Journal | undefined> => {
  const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);
  let user;
  let newJournal;
  if (session?.user?.email) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    user
      ? (newJournal = await prisma.journal.create({
          data: {
            content: input?.content,
            userId: user.id,
          },
        }))
      : undefined;
  }
  return newJournal;
};
