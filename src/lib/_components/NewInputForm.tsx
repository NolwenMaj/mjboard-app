"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { postJournal } from "../serverAction/journal/postJournal";

type FormValues = {
  content: string;
};

const NewInputForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (newJournal) =>
    postJournal(newJournal);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="Ma journée était ..." {...register("content")} />

      <input type="submit" />
    </form>
  );
};
export default NewInputForm;
