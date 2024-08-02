"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Responses } from "@/lib/types";
import { getServerSession } from "next-auth";
import prisma from "../prisma";

export const getAllResponses = async (): Promise<Responses | undefined> => {
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
