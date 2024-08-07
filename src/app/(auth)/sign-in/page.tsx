import SignInForm from "@/lib/_components/auth/SignInForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/_components/ui/card";

export default function SignIn() {
  return (
    <Card className="mx-auto mt-4 w-full max-w-sm pt-2">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Connexion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignInForm />
      </CardContent>
    </Card>
  );
}
