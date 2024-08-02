"use client";

import { Response } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { DeleteButton } from "./DeleteButton";
import EditJournalForm from "./JournalUpdateForm";

export const JournalCardContent = ({ response }: { response: Response }) => {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <>
      <p className="min-h-10 text-base ">{response.content}</p>
      <div className="flex justify-end gap-2">
        <DeleteButton responseId={response.id} />
        <Button type="submit" onClick={() => setIsEditing(true)}>
          Editer
        </Button>
      </div>
    </>
  ) : (
    <EditJournalForm response={response} onEdit={() => setIsEditing(false)} />
  );
};
