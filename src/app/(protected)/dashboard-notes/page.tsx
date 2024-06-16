import CreateNote from "@/lib/_components/CreateNote";
import { JournalsScrollView } from "@/lib/_components/JournalsScrollview";

const DashboardNotes = () => {
  return (
    <main className="flex flex-col min-h-screen w-full gap-4 p-4">
      <CreateNote />
      <JournalsScrollView />
    </main>
  );
};

export default DashboardNotes;
