import CreateNote from "./CreateNote";
import Note, { NoteProps } from "./Note";

export type NotesProps = NoteProps[];

export const NotesDashboard = ({ datas }: { datas: NoteProps[] }) => {
  return (
    <div className="flex flex-col gap-4 w-full p-10">
      <CreateNote />
      {datas.map((data: NoteProps) => (
        <Note
          id={data.id}
          key={data.id}
          date={data.date}
          title={data.title}
          content={data.content}
        />
      ))}
    </div>
  );
};

export default NotesDashboard;
