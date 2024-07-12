"use client";
import { useRouter } from "next/navigation";
import useToasterMessage from "../../hooks/useToasterMessage";
import deleteUser from "../../serverAction/user/deleteUser";
import { Button } from "../ui/button";

const DeleteAccountButton = () => {
  const { setMessage } = useToasterMessage();
  const router = useRouter();
  const handleDeleteUser = async () => {
    deleteUser();
    setMessage("Compte supprimé");
    router.push("/signin");
    router.refresh();
  };

  return (
    <Button type="submit" onClick={() => handleDeleteUser()}>
      Supprimer le compte
    </Button>
  );
};
export default DeleteAccountButton;
