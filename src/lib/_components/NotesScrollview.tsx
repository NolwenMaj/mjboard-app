import { getAllJournals } from "../serverAction/journal/getAllJournals";

export const NotesScrollView = async () => {
  const journals = await getAllJournals();

  return journals
    ? journals.map((journal) => <p key={journal.id}>{journal.content}</p>)
    : null;
};
