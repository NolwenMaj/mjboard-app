"use client";
import { useRouter } from "next/navigation";
import useToasterMessage from "../hooks/useToasterMessage";
import deleteUser from "../serverAction/user/deleteUser";

const DeleteAccountButton = () => {
  const { setMessage } = useToasterMessage();
  const router = useRouter();
  const handleDeleteUser = async () => {
    deleteUser();
    setMessage("Compte supprimé");
    router.push("/");
    router.refresh();
  };

  return (
    <button
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="text-grey-900 m-1 flex items-center gap-3 rounded-lg bg-gray-300 p-3  text-center transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
      type="submit"
      onClick={() => handleDeleteUser()}
    >
      Supprimer le compte
    </button>
  );
};
export default DeleteAccountButton;
