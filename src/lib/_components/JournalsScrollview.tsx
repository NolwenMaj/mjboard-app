import { getAllJournals } from "../serverAction";
import JournalCard from "./JournalCard";

export const JournalsScrollView = async () => {
  const journals = await getAllJournals();

  return journals
    ? journals.map((journal) => <JournalCard key={journal.id} {...journal} />)
    : null;
};
