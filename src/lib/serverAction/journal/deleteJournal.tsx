"use server";

import { PrismaClient } from "@prisma/client";

export type Journal = {
  content: string;
  id: number;
  userId: number;
  created_at: Date;
  updated_at?: Date;
};

export const deleteJournal = async (journalId: Journal["id"]) => {
  const prisma = new PrismaClient();
  let deleteJournal;
  return (deleteJournal = await prisma.journal.delete({
    where: {
      id: journalId,
    },
  }));
};
