"use client";

import { getQuestion } from "@/lib/repositories/journal/getQuestion";
import { Response } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { DeleteButton } from "./DeleteButton";
import EditJournalForm from "./JournalUpdateForm";
import { Question } from "@prisma/client";

export const JournalCardContent =({
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
          Editer
        </Button>
      </div>
    </>
  ) : (
    <EditJournalForm response={response} onEdit={() => setIsEditing(false)} />
  );
};
