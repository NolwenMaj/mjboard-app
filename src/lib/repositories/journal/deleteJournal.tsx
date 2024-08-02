"use server";

import { Response } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

export const deleteJournal = async (responseId: Response["id"]) => {
  const prisma = new PrismaClient();
  let deleteResponse;
  return (deleteResponse = await prisma.response?.delete({
    where: {
      id: responseId,
    },
  }));
};
