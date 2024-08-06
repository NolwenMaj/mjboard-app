"use server";

import { Response } from "@prisma/client";
import prisma from "../prisma";

export const updateResponse = async (
  responseId: Response["id"],
  input: {
    content: string;
  }
): Promise<void> => {
  try {
    await prisma.response?.update({
      where: {
        id: responseId,
      },
      data: {
        content: input?.content,
      },
    });
  } catch (error) {
    console.error("Error deleting journal:", error);
    throw new Error("Error deleting journal");
  }
};
