"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { postJournal } from "../serverAction/journal/postJournal";

type FormValues = {
  content: string;
};

const NewInputForm = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormValues> = async (newJournal) => {
    try {
      postJournal(newJournal);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Ma journée était ..." {...register("content")} />
      <input type="submit" />
    </form>
  );
};
export default NewInputForm;
