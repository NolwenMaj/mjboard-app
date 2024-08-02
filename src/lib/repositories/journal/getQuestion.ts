"use server";

import { PrismaClient } from "@prisma/client";

export const getQuestion = async (questionId: number) => {
  const prisma = new PrismaClient();
  return await prisma.question?.findUnique({
    where: {
      id: questionId,
    },
  });
};
