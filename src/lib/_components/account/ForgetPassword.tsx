import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/_components/ui/card";
import { Label } from "@radix-ui/react-label";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import useToasterMessage from "../../hooks/useToasterMessage";

const ForgetPassword = () => {
  const router = useRouter();
  const { setMessage } = useToasterMessage();
  const { status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.refresh();
      router.push("/dashboardCharacters");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;

    if (!isValidEmail(email)) {
      setMessage("Cela ne semble pas être un email valide");
      return;
    }

    if (sessionStatus === "loading") {
      return setMessage("En cours...");
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <Card className="mx-auto mt-4 w-full max-w-sm pt-2">
        <CardContent className="space-y-4">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Changer le mot de passe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">
                Merci de renseigner l&apos;email lié au compte :
              </Label>
            </div>

            <Link
              href="/auth"
              role="button"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className=" text-grey-500 flex text-center text-sm italic  hover:text-gray-400 "
            >
              Retourner sur la page de connexion
            </Link>
          </CardContent>
        </CardContent>
      </Card>
    )
  );
};

export default ForgetPassword;
