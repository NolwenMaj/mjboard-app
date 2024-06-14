"use client";

import { Journal } from "../serverAction/journal/getAllJournals";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function JournalCard({ journal }: { journal: Journal }) {
  const handleDelete = (id: number) => {
    console.log(`${id} supprimé`);
  };
  const handleEdit = (id: number) => {
    console.log(`${id} édité`);
  };
  const creationDate = journal.created_at;
  const day = creationDate.toLocaleDateString("fr");
  const dateToDisplay = `le ${day} à ${creationDate.getHours()}h${creationDate.getMinutes()}`;

  return (
    <main className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            {dateToDisplay}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p>{journal.content}</p>
        </CardContent>
        <div className="flex justify-end gap-2 m-1 p-1">
          <Button type="submit" onClick={() => handleDelete(journal.id)}>
            Supprimer
          </Button>
          <Button type="submit" onClick={() => handleEdit(journal.id)}>
            Editer
          </Button>
        </div>
      </Card>
    </main>
  );
}

export default JournalCard;
