import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24 flex w-full items-center justify-center">
      <div className="flex flex-col items-center gap-6 align-middle">
        <h1 className="text-7xl text-primary md:text-9xl"> Journaling </h1>
        <div>
          <Link
            href="/sign-in"
            role="button"
            className=" inline-flex items-center whitespace-nowrap rounded-md bg-primary p-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Authentification
          </Link>
        </div>
      </div>
    </main>
  );
}
