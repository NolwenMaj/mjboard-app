"use client";

import { Section } from "@/lib/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { FileEditIcon } from "../ui/customIcons";
import JournalUpdateForm from "./JournalUpdateForm";

export const JournalCardContent = ({ section }: { section: Section }) => {
  const [isEditing, setIsEditing] = useState(false);

  return !isEditing ? (
    <div className="flex gap-2">
      <div className="flex justify-end gap-2">
        <Button type="submit" onClick={() => setIsEditing(true)}>
          <FileEditIcon />
        </Button>
      </div>
      <div className="flex-col">
        <p className="text-base font-thin italic leading-none">
          {section.question.content}
        </p>
        <p className="min-h-10 text-base ">{section.response.content}</p>
      </div>
    </div>
  ) : (
    <JournalUpdateForm
      response={section.response}
      onEdit={() => setIsEditing(false)}
    />
  );
};
