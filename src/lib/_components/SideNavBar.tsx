"use client";
import AvatarAccount from "./AvatarAccount";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";
import { LayersIcon, ScrollIcon, UsersIcon } from "./ui/customIcons";

const SideNavBar = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
    {
      title: "Tables",
      total: 3,
      path: "/tableChoice",
      icon: <LayersIcon className="h-4 w-4" />,
    },
    {
      title: "Personnages",
      total: 4,
      path: "/dashboardCharacters",
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      title: "Notes séances",
      total: 4,
      path: "/dashboardNotes",
      icon: <ScrollIcon className="h-4 w-4" />,
    },
    {
      title: "Compte",
      path: "/account",
      icon: <AvatarAccount />,
    },
  ];

  return (
    <>
      <nav className="border-r py-4 md:py-8 bg-white h-screen">
        <div className="flex-1 flex-col items-start gap-1 px-4 w-full h-full overflow-y-auto">
          {tabsUserConnected.map((tab) => (
            <NavBarSection
              title={tab.title}
              total={tab.total}
              path={tab.path}
              icon={tab.icon}
              key={tab.title}
            />
          ))}
        </div>
      </nav>
    </>
  );
};
export default SideNavBar;
