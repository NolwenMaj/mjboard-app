"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AccountManagementPage = () => {
  const { data, update } = useSession();
  const [name, setName] = useState(data?.user?.name);

  const handleSubmit = async (e) => {
    e.preventdefault();
    console.log({ name });
    await update({
      ...data,
      user: {
        ...data?.user,
        name: name,
      },
    });
  };

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center align-middle">
      <h1 className="text-3xl font-bold text-left text-gray-900 ">
        Gestion du compte {data?.user?.name}
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button
          className="flex items-center gap-3 rounded-lg bg-gray-300 p-3 m-1 text-grey-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 text-center"
          type="submit"
        >
          Enregistrer les modifications
        </button>
      </form>
      <Link
        href="/signOut"
        role="button"
        className="flex items-center gap-3 rounded-lg bg-gray-300 p-3 m-1 text-grey-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 text-center"
      >
        Déconnexion
      </Link>
    </main>
  );
};

export default AccountManagementPage;
