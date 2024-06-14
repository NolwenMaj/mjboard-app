import { getAllJournals } from "../serverAction/journal/getAllJournals";
import JournalCard from "./JournalCard";

export const JournalsScrollView = async () => {
  const journals = await getAllJournals();

  return journals
    ? journals.map((journal) => (
        <JournalCard key={journal.id} journal={journal} />
      ))
    : null;
};
