import { FunctionComponent } from "react";
import { Journal } from "../../types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { JournalCardContent } from "./JournalCardContent";

const JournalCard: FunctionComponent<Journal> = (journal) => {
  const creationDate = journal.created_at;
  const day = creationDate.toLocaleDateString("fr");
  const dateToDisplay = `le ${day} à ${creationDate.getHours()}h${creationDate.getMinutes()}`;

  return (
    <Card className="flex w-full flex-col bg-gray-100">
      <CardHeader>
        <CardTitle className="text-base font-thin italic leading-none">
          {dateToDisplay}
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <JournalCardContent journal={journal} />
      </CardContent>
    </Card>
  );
};

export default JournalCard;
