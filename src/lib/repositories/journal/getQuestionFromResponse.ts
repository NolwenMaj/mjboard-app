"use server";

import { Question, Response } from "@prisma/client";
import prisma from "../prisma";

export const getQuestionFromResponse = async (
  response: Response
): Promise<Question | null> => {
  return await prisma.question.findUnique({
    where: {
      id: response.questionId,
    },
  });
};
