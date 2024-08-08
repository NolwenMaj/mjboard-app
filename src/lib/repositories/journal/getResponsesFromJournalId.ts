"use server";

import { Response } from "@prisma/client";
import prisma from "../prisma";

export const getResponsesFromJournalId = async (
  id: number
): Promise<Response[] | null> => {
  const responses = await prisma.response.findMany({
    where: {
      journalId: id,
    },
    orderBy: {
      id: "asc",
    },
  });
  if (!responses) {
    return null;
  }
  return responses;
};
