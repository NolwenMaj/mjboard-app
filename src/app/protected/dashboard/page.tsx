"use client";
import NotesDashboard, { NotesProps } from "@/app/components/NotesDashboard";
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

  const mockData: NotesProps = [
    {
      id: 1,
      title: "Rencontre avec le sorcier Malakar",
      date: new Date("2024-02-16"),
      content:
        "Malakar, le sorcier mystérieux, nous a donné une quête pour retrouver l'ancien artefact perdu dans la forêt interdite.",
    },
    {
      id: 2,
      title: "Exploration des ruines anciennes",
      date: new Date("2024-02-17"),
      content:
        "Nous avons exploré les ruines anciennes au nord du village et découvert des inscriptions énigmatiques gravées sur les murs.",
    },
    {
      id: 3,
      title: "Rencontre avec les elfes des bois",
      date: new Date("2024-02-18"),
      content:
        "Les elfes des bois nous ont confié une mission pour protéger leur forêt sacrée des forces obscures qui la menacent.",
    },
    {
      id: 4,
      title: "Bataille épique contre le dragon noir",
      date: new Date("2024-02-19"),
      content:
        "Nous avons affronté le redoutable dragon noir dans les montagnes de l'ouest et sauvé le royaume de la destruction imminente.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 grid md:grid-cols-[250px_1fr]">
        <div className="border-r py-4 md:py-8">
          <SideMenu tabs={sideMenu} />
        </div>
        <NotesDashboard datas={mockData} />
      </main>
    </div>
  );
};
export default DashboardPage;
