import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

const NotFound = async () => {
  const session = await getServerSession(authOptions);
  const href = !session || !session.user?.email ? "/sign-in" : "/journals";
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h1 className="text-left text-3xl font-bold text-gray-900 ">
        <Link href={href} className="italic underline">
          Viens par là,
        </Link>{" "}
        il y a plus de choses à voir !
      </h1>
    </main>
  );
};

export default NotFound;
