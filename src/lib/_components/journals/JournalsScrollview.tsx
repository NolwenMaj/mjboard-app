import { getAllJournals } from "@/lib/repositories/journal/getAllJournals";
import JournalCard from "./JournalCard";

export const JournalsScrollView = async () => {
  const journals = await getAllJournals();
  if (!journals || journals.length === 0) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <p className="text-xl font-bold">Pas encore de journal à afficher</p>
      </div>
    );
  } else {
    const journalsSorted = journals.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    return (
      <div className="flex flex-col gap-4">
        {journalsSorted?.map((journal) => (
          <JournalCard key={journal.id} {...journal} />
        ))}
      </div>
    );
  }
};
