import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CreateNote = () => {
  return (
    <main className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-base leading-none">
            Nouvelle note
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            id="content"
            placeholder="Ce jour là, ...."
            required
            type="text"
          />
        </CardContent>
        <div className="flex justify-end gap-2 m-1 p-1">
          <Button type="submit">Ajouter</Button>
        </div>
      </Card>
    </main>
  );
};

export default CreateNote;
