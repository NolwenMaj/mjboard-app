"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R8FdfAHdwEB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CharactersDashboard } from "@/app/components/CharactersDashboard";
import SideMenu from "@/app/components/SideMenu";
import { ScrollIcon, UsersIcon } from "@/components/ui/customIcons";

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

  const characters = [
    {
      id: 1,
      name: "Gandalf",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      hp: " HP 100/100",
      class: "magicien",
      level: 10,
    },
    {
      id: 2,
      name: "The Goblin King",
      description: "The fearsome leader of the goblin horde.",
      hp: " HP 50/50",
      class: "guerrier",
      level: 4,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 grid md:grid-cols-[250px_1fr]">
        <div className="border-r py-4 md:py-8">
          <SideMenu tabs={sideMenu} />
        </div>
        <CharactersDashboard />
      </main>
    </div>
  );
};
export default DashboardPage;
