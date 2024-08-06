"use server";

import { Journal } from "@prisma/client";
import prisma from "../prisma";

export const deleteJournalById = async (
  journalId: Journal["id"]
): Promise<void> => {
  try {
    await prisma.journal.delete({
      where: {
        id: journalId,
      },
    });
  } catch (error) {
    console.error("Error deleting journal:", error);
    throw new Error("Error deleting journal");
  }
};
