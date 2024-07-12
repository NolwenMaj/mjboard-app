"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const SignOut = () => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/sign-in",
      redirect: true,
    });
    toast({
      description: "Déconnecté.e !",
    });
  };

  return <Button onClick={handleSignOut}>Déconnexion</Button>;
};

export default SignOut;
