"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useToasterMessage from "../../hooks/useToasterMessage";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import RedirectionButton, { AuthPage } from "./RedirectionButton";

const SignInForm = () => {
  const router = useRouter();
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
        setMessage("Connecté.e !");
        router.push("/journals");
        router.refresh();
      }
    } catch (e) {
      console.warn(e);
      setMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <>
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
      <RedirectionButton pageName={AuthPage.SIGN_IN} />
    </>
  );
};

export default SignInForm;
