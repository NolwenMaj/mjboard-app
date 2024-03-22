import Link from "next/link";

const AccountManagementPage = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center align-middle">
      <h1 className="text-3xl font-bold text-left text-gray-900 ">
        Gestion du compte
      </h1>
      <ul className="flex flex-col gap-3 m-6">
        <li className="flex flex-col gap-3">A venir :</li>
        <li className="flex flex-col gap-3"> - modifier mail </li>
        <li className="flex flex-col gap-3"> - supprimer compte </li>
      </ul>
      <Link
        href="/auth/signOut"
        role="button"
        className="flex items-center gap-3 rounded-lg bg-gray-300 p-3 m-1 text-grey-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 text-center"
      >
        Déconnexion
      </Link>
    </main>
  );
};

export default AccountManagementPage;
