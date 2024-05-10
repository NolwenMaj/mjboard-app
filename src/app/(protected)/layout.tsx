import Footer from "@/lib/_components/Footer";
import SideNavBar from "@/lib/_components/SideNavBar";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);

  return !session || !session.user?.email ? (
    <main className="flex flex-col min-h-screen w-full items-center justify-center align-middle">
      <h1 className="text-3xl font-bold text-left text-gray-900 w-1/2">
        Espace protégé, merci de vous{" "}
        <Link href="/auth" className="italic underline">
          connecter
        </Link>{" "}
        avec un compte valide pour accéder à cette page.
      </h1>
    </main>
  ) : (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/6 flex-shrink-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default ProtectedLayout;
