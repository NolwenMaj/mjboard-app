"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R8FdfAHdwEB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import SideMenu from "@/app/components/SideMenu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRightIcon,
  HeartIcon,
  ScrollIcon,
  ShieldIcon,
  UsersIcon,
} from "@/components/ui/customIcons";

const DashboardPage = () => {
  const sideMenu = [
    {
      title: "Personnages",
      total: 4,
      path: "#",
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      title: "Notes séances",
      total: 4,
      path: "#",
      icon: <ScrollIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 grid md:grid-cols-[250px_1fr]">
        <div className="border-r py-4 md:py-8">
          <SideMenu tabs={sideMenu} />
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
export default DashboardPage;
