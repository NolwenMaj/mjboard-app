import { useState } from "react";
import { NoteProps } from "./Note";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

const CreateNote = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const handleSubmit = () => {
    const inputTitle = (document.getElementById("title") as HTMLInputElement)
      ?.value;
    const inputContent = (
      document.getElementById("content") as HTMLInputElement
    )?.value;
    const inputDate = new Date();

    setNotes([
      ...notes,
      {
        id: 1,
        title: inputTitle,
        content: inputContent,
        date: inputDate,
      },
    ]);

    (document.getElementById("title") as HTMLInputElement).value = "";
    (document.getElementById("content") as HTMLInputElement).value = "";
  };

  return (
    <main className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            Nouvelle note
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 w-full">
          <Input id="title" placeholder="Titre" required type="text" />
          <Input
            id="content"
            placeholder="Ce jour là, ...."
            required
            type="text"
          />
        </CardContent>
        <div className="flex justify-end gap-2 m-1 p-1">
          <Button onClick={handleSubmit} type="submit">
            Ajouter
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default CreateNote;
