import {
  getQuestionFromResponse,
  getResponsesFromJournalId,
} from "@/lib/repositories";
import { Journal, Question, Response } from "@prisma/client";

export const buildSection = async (journalId: Journal["id"]) => {
  const responses = await getResponsesFromJournalId(journalId);
  if (!responses) return;

  const sections: {
    question: Question;
    response: Response;
  }[] = [];

  await Promise.all(
    responses.map(async (response) => {
      const question = await getQuestionFromResponse(response);

      if (question) {
        sections.push({ response, question });
      }
    })
  );

  return sections;
};
