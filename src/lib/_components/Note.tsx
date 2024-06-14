"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type NoteProps = {
  id: number;
  title: string;
  date: Date;
  content: string;
};

function Note(noteProps: NoteProps) {
  const handleDelete = (id: number) => {
    console.log(`${id} supprimé`);
  };
  const handleEdit = (id: number) => {
    console.log(`${id} édité`);
  };

  return (
    <main className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            {noteProps.date.toLocaleDateString()}
          </CardTitle>
          <CardDescription>{noteProps.title}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <p>{noteProps.content}</p>
        </CardContent>
        <div className="flex justify-end gap-2 m-1 p-1">
          <Button type="submit" onClick={() => handleDelete(noteProps.id)}>
            Supprimer
          </Button>
          <Button type="submit" onClick={() => handleEdit(noteProps.id)}>
            Editer
          </Button>
        </div>
      </Card>
    </main>
  );
}

export default Note;
