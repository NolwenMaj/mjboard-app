"use client";
import { updateJournal } from "@/lib/serverAction/journal/updateJournal";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const EditButton = ({ journalId }: { journalId: number }) => {
  const router = useRouter();

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      updateJournal(journalId, { content: "blah" });
      router.refresh();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Button type="submit" onClick={handleEdit}>
      Editer
    </Button>
  );
};
