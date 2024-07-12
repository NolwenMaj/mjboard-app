"use server";

import { Journal } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

export const updateJournal = async (
  journalId: Journal["id"],
  input: {
    content: string;
  }
): Promise<Journal | undefined> => {
  const prisma = new PrismaClient();
  let updatedJournal = await prisma.journal.update({
    where: {
      id: journalId,
    },
    data: {
      content: input?.content,
    },
  });
  return updatedJournal;
};
