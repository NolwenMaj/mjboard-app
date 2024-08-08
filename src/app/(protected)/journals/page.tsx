import { JournalsScrollView } from "@/lib/_components/journals/JournalsScrollview";
import NewJournalCard from "@/lib/_components/journals/NewJournalCard";
import WelcomeText from "@/lib/_components/journals/WelcomeText";

const DashboardJournals = () => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-4 p-4">
      <WelcomeText />
      <NewJournalCard />
      <JournalsScrollView />
    </main>
  );
};

export default DashboardJournals;
