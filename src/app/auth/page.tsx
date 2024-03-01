import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";

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
