import SignUpFormAction from "./SignUpFormAction";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

const SignUpForm = () => {
  return (
    <>
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Inscription</CardTitle>
        <SignUpFormAction />
      </CardHeader>
      <CardContent className="space-y-4"></CardContent>
    </>
  );
};

export default SignUpForm;
