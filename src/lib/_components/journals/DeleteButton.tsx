"use client";
import { deleteJournal } from "@/lib/repositories";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { CircleXmark } from "../ui/customIcons";

export const DeleteButton = ({ responseId }: { responseId: number }) => {
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      deleteJournal(responseId);
      router.refresh();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Button type="submit" onClick={handleDelete}>
      <CircleXmark />
    </Button>
  );
};
