"use client";
import { useRouter } from "next/navigation";
import { deleteJournal } from "../../serverAction/journal/deleteJournal";
import { Button } from "../ui/button";

export const JournalCardButton = ({ journalId }: { journalId: number }) => {
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      deleteJournal(journalId);
      console.log(`${journalId} supprimé`);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      //TODO : implémenter les fonctions serveurs nécéssaires
      console.log(`${journalId} modifié`);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="m-1 flex justify-end gap-2 p-1">
      <Button type="submit" onClick={handleDelete}>
        Supprimer
      </Button>
      <Button type="submit" onClick={handleEdit}>
        Editer
      </Button>
    </div>
  );
};
