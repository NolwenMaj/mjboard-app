"use client";
import {
  LayersIcon,
  ScrollIcon,
  UsersIcon,
} from "@/_components/ui/customIcons";
import AvatarAccount from "./AvatarAccount";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";

const SideNavBar = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
    {
      title: "Tables",
      total: 3,
      path: "/protected/tableChoice",
      icon: <LayersIcon className="h-4 w-4" />,
    },
    {
      title: "Personnages",
      total: 4,
      path: "/protected/dashboardCharacters",
      icon: <UsersIcon className="h-4 w-4" />,
    },
    {
      title: "Notes séances",
      total: 4,
      path: "/protected/dashboardNotes",
      icon: <ScrollIcon className="h-4 w-4" />,
    },
    {
      title: "Compte",
      path: "/protected/account",
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
