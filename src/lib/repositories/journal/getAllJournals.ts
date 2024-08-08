"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Journal } from "@prisma/client";
import { getServerSession } from "next-auth";
import prisma from "../prisma";
import { getUserByEmail } from "../user/getUserByEmail";

export const getAllJournals = async (): Promise<Journal[] | undefined> => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return undefined;
  }

  const user = await getUserByEmail(session.user.email);
  if (!user) {
    return undefined;
  }

  const journals = await prisma.journal.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  if (!journals) {
    return undefined;
  }
  return journals;
};
