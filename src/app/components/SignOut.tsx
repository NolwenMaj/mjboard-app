"use client";
import { toast } from "@/components/ui/use-toast";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

const SignOut = () => {
  useEffect(() => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
    toast({
      description: "Déconnecté.e !",
    });
  }, []);

  return null;
};

export default SignOut;
