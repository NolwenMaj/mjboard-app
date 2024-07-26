"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Journals } from "@/lib/types";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getAllJournals = async (): Promise<Journals | undefined> => {
  const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);
  let user;
  let journals;
  if (session?.user?.email) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    return (journals = await prisma.journal.findMany({
      where: {
        userId: user?.id,
      },
    }));
  }
};
