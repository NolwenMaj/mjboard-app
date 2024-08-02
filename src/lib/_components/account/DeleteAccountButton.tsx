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
    <Button className="mt-20" type="submit" onClick={() => handleDeleteUser()}>
      Supprimer le compte
    </Button>
  );
};
export default DeleteAccountButton;
