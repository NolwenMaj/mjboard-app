import { JournalsScrollView } from "@/lib/_components/journals/JournalsScrollview";
import NewJournalCard from "@/lib/_components/journals/NewJournalCard";

const DashboardJournals = () => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 p-4">
      <NewJournalCard />
      <JournalsScrollView />
    </main>
  );
};

export default DashboardJournals;
