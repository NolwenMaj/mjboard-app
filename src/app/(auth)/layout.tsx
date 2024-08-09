import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session && session.user?.email) {
    redirect("/journals");
  }
  return (
    <main className="mt-2 flex w-full items-center justify-center">
      <div className="flex flex-col items-center gap-6 align-middle">
        <h1 className="text-7xl text-primary md:text-9xl"> Journaling </h1>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
