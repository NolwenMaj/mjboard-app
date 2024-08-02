import { getAllResponses } from "../../repositories";
import JournalCard from "./JournalCard";

export const JournalsScrollView = async () => {
  const responses = await getAllResponses();
  if (!responses || responses.length === 0) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <p className="text-xl font-bold">Pas encore de journal à afficher</p>
      </div>
    );
  } else {
    const responsesSorted = responses.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    return (
      <div className="flex flex-col gap-4">
        {responsesSorted?.map((response) => (
          <JournalCard key={response.id} {...response} />
        ))}
      </div>
    );
  }
};
