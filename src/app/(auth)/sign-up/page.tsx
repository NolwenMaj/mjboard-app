import SignUpForm from "@/lib/_components/auth/SignUpForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/_components/ui/card";

export default function SignUp() {
  return (
    <Card className="mx-auto mt-4 w-full max-w-sm pt-2">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Inscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
