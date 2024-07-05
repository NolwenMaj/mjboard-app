"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useUpdateName } from "../hooks/useUpdateName";

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
        <button
          onClick={updateName}
          disabled={loading}
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="text-grey-900 m-1 flex items-center gap-3 rounded-lg bg-gray-300 p-3  text-center transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
        >
          {loading ? "Modification en cours" : "Modifier"}
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
