import SignInForm from "@/lib/_components/auth/SignInForm";
import SignUpForm from "@/lib/_components/auth/SignUpForm";
import { Card, CardContent } from "@/lib/_components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/lib/_components/ui/tabs";

export default function AuthPage() {
  return (
    <Card className="mx-auto mt-4 w-full max-w-sm pt-2">
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
