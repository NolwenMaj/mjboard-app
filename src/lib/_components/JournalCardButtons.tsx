"use client";
import { deleteJournal } from "../serverAction/journal/deleteJournal";
import { Button } from "./ui/button";

export const JournalCardButton = ({ journalId }: { journalId: number }) => {
  const handleDelete = async (id: number) => {
    try {
      deleteJournal(id);
      console.log(`${id} supprimé`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = (id: number) => {
    try {
      console.log(`${id} modifié`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="m-1 flex justify-end gap-2 p-1">
      <Button type="submit" onClick={() => handleDelete(journalId)}>
        Supprimer
      </Button>
      <Button type="submit" onClick={() => handleEdit(journalId)}>
        Editer
      </Button>
    </div>
  );
};
