"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUpdateName } from "../../hooks/useUpdateName";
import { Button } from "../ui/button";

const AccountPage = () => {
  const { data: session } = useSession();
  const { name, setName, loading, updateName } = useUpdateName();

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session?.user?.name, setName]);

  return (
    <div className="flex flex-row gap-3 items-center">
      <label htmlFor="name">Nom: </label>
      <input
        className="border-2 border-gray-300 rounded-md p-1"
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={session?.user?.name || "Minima Geste"}
      />
      <Button onClick={updateName} disabled={loading} className="w-24">
        {loading ? "En cours" : "Modifier"}
      </Button>
    </div>
  );
};

export default AccountPage;
