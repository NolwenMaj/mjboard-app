import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import NewInputForm from "./NewInputForm";

const NewInputContainer = () => {
  return (
    <Card className="flex w-full flex-col gap-4 bg-gray-100">
      <CardHeader>
        <CardTitle className="text-base font-thin italic leading-none">
          Nouveau journal
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <NewInputForm />
      </CardContent>
    </Card>
  );
};

export default NewInputContainer;
