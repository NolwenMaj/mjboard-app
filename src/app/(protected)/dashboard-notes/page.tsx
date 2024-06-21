import CreateNote from "@/lib/_components/CreateNote";
import { JournalsScrollView } from "@/lib/_components/JournalsScrollview";

const DashboardNotes = () => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 p-4">
      <CreateNote />
      <JournalsScrollView />
    </main>
  );
};

export default DashboardNotes;
