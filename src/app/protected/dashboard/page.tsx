"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R8FdfAHdwEB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 grid md:grid-cols-[250px_1fr]">
        <div className="border-r py-4 md:py-8">
          <nav className="flex flex-col items-start gap-1 px-4">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Personnages
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                4
              </Badge>
            </Link>

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <ScrollIcon className="h-4 w-4" />
              Notes séances
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">
                    Gandalf the Grey
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level 10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">HP 100/100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">AC 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">
                    The Goblin King
                  </CardTitle>
                  <CardDescription className="text-sm">
                    The fearsome leader of the goblin horde.
                  </CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level 5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">HP 50/50</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">AC 18</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">
                    The Enchanted Forest
                  </CardTitle>
                  <CardDescription className="text-sm">
                    A mystical place where the trees whisper secrets.
                  </CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level 10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">HP 100/100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">AC 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold">
                    The Enchanted Forest
                  </CardTitle>
                  <CardDescription className="text-sm">
                    A mystical place where the trees whisper secrets.
                  </CardDescription>
                </div>
                <ChevronRightIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level 10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HeartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">HP 100/100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium">AC 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

function BackpackIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  );
}

type IconProps = {
  className?: string;
};

function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function HeartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MapPinIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Package2Icon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function ScrollIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
export default DashboardPage;
