import { JournalsScrollView } from "@/lib/_components/journal/JournalsScrollview";
import NewInputContainer from "@/lib/_components/journal/NewInputContainer";

const DashboardJournals = () => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 p-4">
      <NewInputContainer />
      <JournalsScrollView />
    </main>
  );
};

export default DashboardJournals;
