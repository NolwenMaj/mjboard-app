import Footer from "@/lib/_components/Footer";
import SideNavBar from "@/lib/_components/nav/SideNavBar";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);

  return !session || !session.user?.email ? (
    <main className="flex min-h-screen w-full flex-col items-center justify-center align-middle">
      <h1 className="w-1/2 text-left text-3xl font-bold text-gray-900">
        Espace protégé, merci de vous{" "}
        <Link href="/auth" className="italic underline">
          connecter
        </Link>{" "}
        avec un compte valide pour accéder à cette page.
      </h1>
    </main>
  ) : (
    <main className="flex flex-row ">
      <div className="w-1/6 border-r">
        <SideNavBar />
      </div>
      <div className="flex w-full flex-col">
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </main>
  );
};

export default ProtectedLayout;
