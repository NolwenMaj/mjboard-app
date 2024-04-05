import Footer from "@/_components/Footer";
import SideNavBar from "@/_components/SideNavBar";
import { getServerSession } from "next-auth/next";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

interface ProtectedLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProtectedLayout = async ({ children }: ProtectedLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return <div>This is protected and you do not have access to it.</div>;
  }

  return (
    <body className="flex flex-row min-h-screen">
      <div className="w-1/6 flex-shrink-0">
        <SideNavBar />
      </div>
      <div className="flex flex-col">
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </body>
  );
};

export default ProtectedLayout;
