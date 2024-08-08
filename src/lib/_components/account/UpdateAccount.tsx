"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUpdateName } from "../../hooks/useUpdateName";
import { Button } from "../ui/button";
import { FileEditIcon } from "../ui/customIcons";

const AccountPage = () => {
  const { data: session } = useSession();
  const { pseudo, setPseudo, loading, updateName } = useUpdateName();

  useEffect(() => {
    if (session?.user?.name) {
      setPseudo(session.user.name);
    }
  }, [session?.user?.name, setPseudo]);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <label htmlFor="name">Changer pseudo: </label>
      <input
        className="rounded-md border-2 border-gray-300 p-2 focus:border-primary"
        id="pseudo"
        type="text"
        onChange={(e) => setPseudo(e.target.value)}
        placeholder={pseudo || "pseudo"}
      />
      <Button onClick={updateName} disabled={loading} className="w-24">
        {loading ? "En cours" : <FileEditIcon />}
      </Button>
    </div>
  );
};

export default AccountPage;
