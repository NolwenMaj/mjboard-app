import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex items-center h-14 px-4 border-b shrink-0 md:px-6 gap-5">
      <Link href="/">🏠</Link>
      {session && session.user?.email ? (
        <div className="flex flex-row gap-5 justify-between w-full">
          <div className="flex gap-5 items-center">
            <Link
              className="text-gray-500 dark:text-gray-400"
              href="/auth/signout"
            >
              Se déconnecter
            </Link>
            <Link
              className="text-gray-500 dark:text-gray-400"
              href="/protected/dashboard"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex flex-row items-center gap-1 justify-end">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{session.user?.email}</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <Link
            className="text-gray-500 dark:text-gray-400"
            href="/auth/signin"
          >
            Se connecter
          </Link>
          <Link
            className="text-gray-500 dark:text-gray-400"
            href="/auth/signup"
          >
            Inscription
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
