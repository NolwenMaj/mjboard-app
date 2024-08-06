"use client";
import deleteUser from "@/lib/repositories/user/deleteUser";
import { signOut } from "next-auth/react";
import useToasterMessage from "../../hooks/useToasterMessage";
import { Button } from "../ui/button";

const DeleteAccountButton = () => {
  const { setMessage } = useToasterMessage();
  const handleDeleteUser = async () => {
    try {
      await deleteUser();
      setMessage("Compte supprimé");
      signOut({
        callbackUrl: "/",
        redirect: true,
      });
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 md:flex-row">
      <h3 className="text-sm font-semibold md:text-xl">
        Attention cette action est irréversible :{" "}
      </h3>
      <Button
        className="bg-custOrange hover:bg-custOrange/80"
        type="submit"
        onClick={() => handleDeleteUser()}
      >
        Supprimer le compte
      </Button>
    </div>
  );
};
export default DeleteAccountButton;
