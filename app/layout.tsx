import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DataProvider } from "./_components/DataProvider";
import Provider from "./_components/Provider";
import { Toaster } from "./_components/ui/toaster";
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
        <Provider>
          <DataProvider>{children}</DataProvider>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
