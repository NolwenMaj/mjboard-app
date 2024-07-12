"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import useToasterMessage from "../../hooks/useToasterMessage";
import { signUp } from "../../serverAction";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignUpFormAction = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setMessage } = useToasterMessage();

  const handleSubmit = async () => {
    setMessage("Inscription en cours ...");
    const messageFromServer = await signUp(email, password);
    setMessage(messageFromServer);
    router.push("/sign-in");
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
        S&apos;inscrire
      </Button>
    </>
  );
};

export default SignUpFormAction;
