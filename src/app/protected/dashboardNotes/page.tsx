"use client";
import CreateNote from "@/app/components/CreateNote";
import Note, { NoteProps } from "@/app/components/Note";
import { mockNotes } from "@/app/lib/mockDatas";

const DashboardNotes = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <CreateNote />
        {mockNotes.map((note: NoteProps) => (
          <Note
            id={note.id}
            key={note.id}
            date={note.date}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
    </main>
  );
};

export default DashboardNotes;
