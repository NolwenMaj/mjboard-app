import { getAllQuestions } from "@/lib/repositories";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import NewJournalForm from "./NewJournalForm";

const NewJournalCard = async () => {
  const questions = await getAllQuestions();
  if (!questions) return null;
  return (
    <Card className="flex w-full flex-col gap-4 bg-gray-100">
      <CardHeader>
        <CardTitle className="text-base font-thin italic leading-none">
          Nouveau journal
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <NewJournalForm questions={questions} />
      </CardContent>
    </Card>
  );
};

export default NewJournalCard;
