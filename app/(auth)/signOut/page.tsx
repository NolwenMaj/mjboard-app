"use client";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "../../../_components/ui/use-toast";

const SignOutPage = () => {
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

export default SignOutPage;
