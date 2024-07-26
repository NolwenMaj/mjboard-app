"use server";

import { Journal } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

export const deleteJournal = async (journalId: Journal["id"]) => {
  const prisma = new PrismaClient();
  let deleteJournal;
  return (deleteJournal = await prisma.journal.delete({
    where: {
      id: journalId,
    },
  }));
};
