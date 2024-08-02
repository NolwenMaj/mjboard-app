"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { updateJournal } from "@/lib/repositories/journal/updateJournal";
import { Response } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type FormValues = {
  content: string;
};

const JournalUpdateForm = ({
  response,
  onEdit,
}: {
  response: Response;
  onEdit: () => void;
}) => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (newJournal) => {
    try {
      updateJournal(response.id, {
        content: newJournal.content,
      });
      onEdit();
      router.refresh();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleCancel = () => {
    reset();
    onEdit();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-between gap-2"
    >
      <input
        className="min-h-10 w-full rounded-md border-2 border-gray-300 bg-white p-2 focus:border-indigo-500 focus:outline-none"
        type="text"
        required={true}
        placeholder=""
        autoFocus={true}
        maxLength={1000}
        defaultValue={response.content}
        {...register("content")}
      />
      <div className="flex justify-end gap-2 ">
        <Button>
          <input type="submit" />
        </Button>
        <Button onClick={handleCancel} type="button">
          Annuler
        </Button>
      </div>
    </form>
  );
};
export default JournalUpdateForm;
