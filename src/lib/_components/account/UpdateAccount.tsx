"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUpdateName } from "../../hooks/useUpdateName";
import { Button } from "../ui/button";

const AccountPage = () => {
  const { data: session, status } = useSession();
  const { name, setName, loading, error, success, updateName } =
    useUpdateName();

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session?.user?.name, setName]);

  return (
    <div>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={session?.user?.name || "Minima Geste"}
        />
        <Button onClick={updateName} disabled={loading}>
          {loading ? "Modification en cours" : "Modifier"}
        </Button>
      </div>
    </div>
  );
};

export default AccountPage;
