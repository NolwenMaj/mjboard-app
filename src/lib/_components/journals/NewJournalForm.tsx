"use client";
import { Question } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postJournal } from "../../repositories";
import { Button } from "../ui/button";
import ConfettiCanvas from "./ConfettiCanvas";

type FormValues = {
  responses: { [key: string]: string };
};

const NewJournalForm = ({ questions }: { questions: Question[] }) => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const [triggerConfettis, setTriggerConfettis] = useState(false);
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  useEffect(() => {
    const fetchLastJournal = async () => {
      try {
        const response = await fetch("/api/journal/last");
        if (!response.ok) {
          throw new Error("Failed to fetch last journal");
        }
        const result = await response.json();
        const journal = result.message;

        const sameDateAsLastJournal =
          journal?.created_at &&
          new Date(journal.created_at).toDateString() ===
            new Date().toDateString();

        setDisableSubmitButton(sameDateAsLastJournal);
      } catch (error) {
        console.error("Failed to fetch last journal:", error);
      }
    };
    fetchLastJournal();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (newJournalData) => {
    try {
      await postJournal(newJournalData);
      setTriggerConfettis(true);
      setTimeout(() => setTriggerConfettis(false), 2000);
      setDisableSubmitButton(true);
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
      {questions.map((question) => (
        <input
          key={question.id}
          className="min-h-10 w-full rounded-md border-2 border-gray-300 bg-white p-2 focus:border-primary focus:outline-none"
          required={true}
          placeholder={question.content}
          defaultValue=""
          {...register(`responses.${question.id}`)}
        />
      ))}
      <ConfettiCanvas trigger={triggerConfettis} />
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={disableSubmitButton}>
          {disableSubmitButton ? "Déjà publié aujourd'hui" : "Publier"}
        </Button>
      </div>
    </form>
  );
};

export default NewJournalForm;
