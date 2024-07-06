"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useToasterMessage from "../hooks/useToasterMessage";

const SignInForm = () => {
  const router = useRouter();
  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setMessage } = useToasterMessage();

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
      router.push("/journals");
      router.refresh();
      setMessage("Connecté.e !");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <CardHeader className="space-y-1 text-center">
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
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            placeholder="Mot de passe"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Se connecter
        </Button>
      </CardContent>
    </>
  );
};

export default SignInForm;
