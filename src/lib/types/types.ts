import { Question, Response } from "@prisma/client";

export enum Color {
  WHITE = "#F2F2F2",
  DEEP_PURPLE = "#614BF2",
  LIGHT_PURPLE = "#7F6DF2",
  GREEN = "#B5D93B",
  ORANGE = "#F2A30F",
}

export type Section = {
  question: Question;
  response: Response;
};
