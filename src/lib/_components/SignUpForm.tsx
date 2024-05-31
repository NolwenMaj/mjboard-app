import SignUpFormAction from "./SignUpFormAction";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

const SignUpForm = () => {
  return (
    <>
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-2xl">Inscription</CardTitle>
        <SignUpFormAction />
      </CardHeader>
      <CardContent className="space-y-4"></CardContent>
    </>
  );
};

export default SignUpForm;
