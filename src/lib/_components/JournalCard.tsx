import { FunctionComponent } from "react";

import { Journal } from "../types";
import { JournalCardButton } from "./JournalCardButtons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const JournalCard: FunctionComponent<Journal> = (journal) => {
  const creationDate = journal.created_at;
  const day = creationDate.toLocaleDateString("fr");
  const dateToDisplay = `le ${day} à ${creationDate.getHours()}h${creationDate.getMinutes()}`;

  return (
    <main className="flex w-full flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            {dateToDisplay}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p>{journal.content}</p>
        </CardContent>
        <JournalCardButton journalId={journal.id} />
      </Card>
    </main>
  );
};

export default JournalCard;
