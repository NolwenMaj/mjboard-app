"use client";

import { Response } from "@/lib/types";
import { Question } from "@prisma/client";
import { useState } from "react";
import { Button } from "../ui/button";
import { FileEditIcon } from "../ui/customIcons";
import { DeleteButton } from "./DeleteButton";
import EditJournalForm from "./JournalUpdateForm";

export const JournalCardContent = ({
  response,
  question,
}: {
  response: Response;
  question: Question;
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <>
      <p className="text-base font-thin italic leading-none">
        {question?.content}
      </p>
      <p className="min-h-10 text-base ">{response.content}</p>
      <div className="flex justify-end gap-2">
        <DeleteButton responseId={response.id} />
        <Button type="submit" onClick={() => setIsEditing(true)}>
          <FileEditIcon />
        </Button>
      </div>
    </>
  ) : (
    <EditJournalForm response={response} onEdit={() => setIsEditing(false)} />
  );
};
