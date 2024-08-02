"use server";

import { Response } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

export const updateJournal = async (
  responseId: Response["id"],
  input: {
    content: string;
  }
): Promise<Response | undefined> => {
  const prisma = new PrismaClient();
  let updatedJournal = await prisma.response?.update({
    where: {
      id: responseId,
    },
    data: {
      content: input?.content,
    },
  });
  return updatedJournal;
};
