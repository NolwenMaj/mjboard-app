"use client";

import { Button } from "@/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/_components/ui/card";
import { Input } from "@/_components/ui/input";
import { Label } from "@/_components/ui/label";
import { toast } from "@/_components/ui/use-toast";
import { useEffect, useState } from "react";
import { signUp } from "../_utils/signUp";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Inscription en cours ...");
    const messageFromServer = await signUp(email, password);
    setMessage(messageFromServer);
  };

  useEffect(() => {
    if (message != "") {
      toast({
        description: message,
      });
    }
  }, [message]);

  return (
    <>
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-2xl">Inscription</CardTitle>
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
          S&apos;inscrire
        </Button>
      </CardContent>
    </>
  );
};
