import CreateNote from "@/lib/_components/CreateNote";
import { NotesScrollView } from "@/lib/_components/NotesScrollview";

const DashboardNotes = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <CreateNote />
        <NotesScrollView />
      </div>
    </main>
  );
};

export default DashboardNotes;
