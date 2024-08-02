import { getQuestion } from "@/lib/repositories/journal/getQuestion";
import { FunctionComponent } from "react";
import { Response } from "../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { JournalCardContent } from "./JournalCardContent";

const JournalCard: FunctionComponent<Response> = async (response) => {
  if (!response) return null;
  else {
    const creationDate = response.created_at;
    const day = creationDate.toLocaleDateString("fr");
    const dateToDisplay = `le ${day} à ${creationDate.getHours()}h${creationDate.getMinutes()}`;
    const question = await getQuestion(response.questionId);

    if (!question) return null;

    return (
      <Card className="flex w-full flex-col bg-gray-100">
        <CardHeader>
          <CardTitle className="text-base font-thin italic leading-none">
            {dateToDisplay}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <JournalCardContent response={response} question={question} />
        </CardContent>
      </Card>
    );
  }
};

export default JournalCard;
