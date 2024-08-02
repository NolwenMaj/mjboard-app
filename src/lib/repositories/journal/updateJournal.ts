"use server";

import { Response } from "@/lib/types";
import prisma from "../prisma";

export const updateJournal = async (
  responseId: Response["id"],
  input: {
    content: string;
  }
): Promise<Response | undefined> => {
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
