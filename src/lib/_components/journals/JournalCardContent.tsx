"use client";

import { Journal } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { DeleteButton } from "./DeleteButton";
import EditJournalForm from "./EditJournalForm";

export const JournalCardContent = ({ journal }: { journal: Journal }) => {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <>
      <p className="min-h-10 text-base ">{journal.content}</p>
      <div className="flex justify-end gap-2">
        <DeleteButton journalId={journal.id} />
        <Button type="submit" onClick={() => setIsEditing(true)}>
          Editer
        </Button>
      </div>
    </>
  ) : (
    <EditJournalForm journal={journal} onEdit={() => setIsEditing(false)} />
  );
};
