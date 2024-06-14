"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

type Journal = {
  content: string;
  id: number;
  userId: number;
  created_at: Date;
  updated_at?: Date;
};
type Journals = Journal[];

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
