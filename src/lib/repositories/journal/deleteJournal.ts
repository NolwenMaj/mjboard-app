"use server";

import { Response } from "@/lib/types";
import prisma from "../prisma";

export const deleteJournal = async (responseId: Response["id"]) => {
  let deleteResponse;
  return (deleteResponse = await prisma.response?.delete({
    where: {
      id: responseId,
    },
  }));
};
