"use server";

import { Question } from "@prisma/client";
import prisma from "../prisma";

export const getQuestion = async (
  questionId: number
): Promise<Question | null> => {
  return await prisma.question.findUnique({
    where: {
      id: questionId,
    },
  });
};
