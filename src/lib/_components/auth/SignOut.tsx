"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const SignOut = () => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
    toast({
      description: "Déconnecté.e !",
    });
  };

  return (
    <Button className="mt-4" onClick={handleSignOut}>
      Déconnexion
    </Button>
  );
};

export default SignOut;
