import SignInForm from "../../../_components/SignInForm";
import { SignUpForm } from "../../../_components/SignUpForm";
import { Card, CardContent } from "../../../_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../_components/ui/tabs";

export default function AuthPage() {
  return (
    <Card className="w-full max-w-sm mx-auto mt-4 pt-2">
      <CardContent className="space-y-4">
        <Tabs defaultValue="sign-in">
          <TabsList className="flex gap-4">
            <TabsTrigger value="sign-in">Connexion</TabsTrigger>
            <TabsTrigger value="sign-up">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignInForm />
          </TabsContent>
          <TabsContent value="sign-up">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
