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

import { useEffect, useState } from "react";
import { toast } from "./ui/use-toast";

const ForgetPassword = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const { data: session, status: sessionStatus } = useSession();

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
  useEffect(() => {
    if (message != "") {
      toast({
        description: message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

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
              {/* <Input
              id="currentPassword"
              placeholder="ton@email.com"
              required
              type="email"
            /> */}
            </div>
            {/* <Button className="w-full" onClick={handleSubmit}>
            Valider
          </Button> */}
            <Link
              href="/auth"
              role="button"
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
