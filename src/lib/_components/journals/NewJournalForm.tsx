"use client";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { postJournal } from "../../repositories";
import { Button } from "../ui/button";
import ConfettiCanvas from "./ConfettiCanvas";

type FormValues = {
  content: string;
};

const NewJournalForm = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const [triggerConfettis, setTriggerConfettis] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (newJournal) => {
    try {
      postJournal(newJournal);
      setTriggerConfettis(true);
      setTimeout(() => setTriggerConfettis(false), 2000);
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
        className="p-2 min-h-10 w-full rounded-md border-2 border-gray-300 bg-white focus:border-indigo-500 focus:outline-none"
        required={true}
        placeholder={"Comment je me suis sentie aujourd'hui ?"}
        defaultValue=""
        {...register("content")}
      />
      <ConfettiCanvas trigger={triggerConfettis} />
      <div className="flex justify-end gap-2 ">
        <Button>
          <input type="submit" />
        </Button>
      </div>
    </form>
  );
};
export default NewJournalForm;
