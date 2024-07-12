import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "../lib/_components/Provider";
import { Toaster } from "../lib/_components/ui/toaster";
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
      <body className={inter.className + " bg-gray-100" + "h-full"}>
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
