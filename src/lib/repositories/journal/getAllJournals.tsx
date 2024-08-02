"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Responses } from "@/lib/types";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getAllResponses = async (): Promise<Responses | undefined> => {
  const prisma = new PrismaClient();
  const session = await getServerSession(authOptions);
  let user;
  let responses;
  if (session?.user?.email) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    return (responses = await prisma.response?.findMany({
      where: {
        userId: user?.id,
      },
    }));
  }
};
