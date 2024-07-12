import { getAllJournals } from "../../serverAction";
import JournalCard from "./JournalCard";

export const JournalsScrollView = async () => {
  const journals = await getAllJournals();

  return !journals || journals.length === 0 ? (
    <div className="flex size-full flex-col items-center justify-center">
      <p className="text-xl font-bold">Pas encore de journal à afficher</p>
    </div>
  ) : (
    <div className="flex-col-reverse">
      {journals?.map((journal) => (
        <JournalCard key={journal.id} {...journal} />
      ))}
    </div>
  );
};
