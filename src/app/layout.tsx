import { Toaster } from "@/_components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "../_components/Provider";
import SideNavBar from "../_components/SideNavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MJboard",
  description: "Hé coucou",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-100"}>
        <main className="flex-1 grid md:grid-cols-[250px_1fr]">
          <SideNavBar />
          <Provider>{children}</Provider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
