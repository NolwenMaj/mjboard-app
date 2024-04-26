"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center align-middle">
      <p>Bienvenue sur MJBOARD !</p>
      <Link
        href="/signIn"
        role="button"
        className="flex items-center gap-3 rounded-lg bg-gray-300 p-3 m-1 text-grey-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 text-center"
      >
        Authentification
      </Link>
    </main>
  );
}
