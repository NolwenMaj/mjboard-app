"use client";

import { Button } from "@/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/_components/ui/card";
import { Input } from "@/_components/ui/input";
import { Label } from "@/_components/ui/label";
import { useToast } from "@/_components/ui/use-toast";
import { signIn, useSession } from "next-auth/react";
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
    }

    setMessage(message);
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.refresh();
      router.push("/protected/dashboardCharacters");
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
      </CardContent>
    </>
  );
};

export default SignInForm;
