import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <p>Bienvenue sur Journaling !</p>
      <Link
        href="/sign-in"
        role="button"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="text-grey-900 m-1 flex items-center gap-3 rounded-lg bg-gray-300 p-3  text-center transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
      >
        Authentification
      </Link>
    </main>
  );
}
