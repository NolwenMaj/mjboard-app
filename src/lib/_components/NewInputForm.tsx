"use client";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { postJournal } from "../serverAction";
import { Button } from "./ui/button";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full justify-between gap-2"
    >
      <input
        className="w-full"
        required={true}
        placeholder="Ma journée était ..."
        defaultValue=""
        {...register("content")}
      />
      <Button>
        <input type="submit" />
      </Button>
    </form>
  );
};
export default NewInputForm;
