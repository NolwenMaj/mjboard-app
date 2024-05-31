"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";
/* import Link from "next/link"; */
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Connexion en cours...");

    try {
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInResponse || signInResponse.ok !== true) {
        setMessage("Connexion impossible");
      } else {
        router.refresh();
      }
    } catch (err) {
      console.log(err);
      setMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard-notes");
      router.refresh();
      setMessage("Connecté.e !");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (message != "") {
      toast({
        description: message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <>
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-2xl">Connexion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Se connecter
        </Button>
        {/* <Link
          href="/auth/forgetPassword"
          role="button"
          className=" text-sm italic flex text-center text-grey-500  hover:text-gray-400 "
        >
          mot de passe oublié
        </Link> */}
      </CardContent>
    </>
  );
};

export default SignInForm;
