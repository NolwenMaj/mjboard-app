"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { EscapeIcon } from "../ui/customIcons";
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
    <div className="flex items-center gap-2">
      <label>Déconnexion</label>
      <Button onClick={handleSignOut}>
        <EscapeIcon />
      </Button>
    </div>
  );
};

export default SignOut;
