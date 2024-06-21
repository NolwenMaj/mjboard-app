"use client";
import SignOut from "@/lib/_components/SignOut";
import { toast } from "@/lib/_components/ui/use-toast";
import deleteUser from "@/lib/serverAction/user/deleteUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountManagementPage = () => {
  const router = useRouter();
  const { data, update } = useSession();
  const [name, setName] = useState(data?.user?.name);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    console.log({ name });
    await update({
      ...data,
      user: {
        ...data?.user,
        name: name,
      },
    });
  };
  const handleDeleteUser = async () => {
    deleteUser();
    setMessage("Compte supprimé");
    router.push("/");
    router.refresh();
  };

  useEffect(() => {
    if (message != "") {
      toast({
        description: message,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h1 className="text-left text-3xl font-bold text-gray-900 ">
        Gestion du compte {data?.user?.name}
      </h1>
      <button onClick={() => handleDeleteUser()}>Supprimer le compte</button>
      <form onSubmit={() => handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button
          className="text-grey-900 m-1 flex items-center gap-3 rounded-lg bg-gray-300 p-3  text-center transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
          type="submit"
        >
          Enregistrer les modifications
        </button>
      </form>
      <SignOut />
    </main>
  );
};

export default AccountManagementPage;
