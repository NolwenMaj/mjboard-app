import CreateNote from "@/lib/_components/CreateNote";
import { JournalsScrollView } from "@/lib/_components/JournalsScrollview";

const DashboardNotes = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <CreateNote />
        <JournalsScrollView />
      </div>
    </main>
  );
};

export default DashboardNotes;
