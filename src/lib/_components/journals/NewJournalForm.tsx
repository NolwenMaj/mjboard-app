"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { postJournal } from "../../serverAction";
import { Button } from "../ui/button";

type FormValues = {
  content: string;
};

const NewJournalForm = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (newJournal) => {
    try {
      postJournal(newJournal);
      router.refresh();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-between gap-2"
    >
      <input
        className="min-h-10 w-full rounded-md border-2 border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
        required={true}
        placeholder="Ma journée était ..."
        defaultValue=""
        {...register("content")}
      />
      <div className="flex justify-end gap-2 ">
        <Button>
          <input type="submit" />
        </Button>
      </div>
    </form>
  );
};
export default NewJournalForm;
