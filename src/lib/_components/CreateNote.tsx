import NewInputForm from "./NewInputForm";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const NewInputContainer = () => {
  return (
    <main className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            Nouvelle note
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <NewInputForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default NewInputContainer;
