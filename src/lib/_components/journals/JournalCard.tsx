import { Journal } from "@prisma/client";
import { FunctionComponent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { buildSection } from "./buildSection";
import { DeleteJournalButton } from "./DeleteJournalButton";
import { JournalCardContent } from "./JournalCardContent";

const JournalCard: FunctionComponent<Journal> = async (journal: Journal) => {
  if (!journal) return null;

  const creationDate = journal.created_at;
  const day = creationDate.toLocaleDateString("fr");
  const dateToDisplay = `le ${day} à ${creationDate.getHours()}h${creationDate.getMinutes()}`;

  const sections = await buildSection(journal.id);

  return (
    <Card className="relative flex w-full flex-col bg-gray-100">
      <div className="absolute right-0 top-0 m-2">
        <DeleteJournalButton journalId={journal.id} />
      </div>
      <CardHeader>
        <CardTitle className="text-base font-thin italic leading-none">
          {dateToDisplay}
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        {sections?.map((section) => (
          <div key={section.response.id}>
            <JournalCardContent section={section} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default JournalCard;
