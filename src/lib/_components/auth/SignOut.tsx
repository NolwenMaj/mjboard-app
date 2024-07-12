"use client";

import { signOut } from "next-auth/react";
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

  return (
    <button
      className="text-grey-900 m-1 flex items-center gap-3 rounded-lg bg-gray-300 p-3  text-center transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
      onClick={handleSignOut}
    >
      Déconnexion
    </button>
  );
};

export default SignOut;
