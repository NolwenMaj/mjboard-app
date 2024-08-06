"use server";

import { Question } from "@prisma/client";
import prisma from "../prisma";

export const getAllQuestions = async (): Promise<Question[] | null> => {
  const questions = await prisma.question.findMany();
  if (!questions) {
    return null;
  }
  return questions;
};
