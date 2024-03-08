"use client";

import { ScrollIcon, UsersIcon } from "@/_components/ui/customIcons";
import AvatarAccount from "./AvatarAccount";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";

const NavbarConnected = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
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
      title: "Déconnexion",
      path: "/auth/signOut",
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
      {tabsUserConnected.map((tab) => (
        <NavBarSection
          title={tab.title}
          total={tab.total}
          path={tab.path}
          icon={tab.icon}
          key={tab.title}
        />
      ))}
    </>
  );
};

export default NavbarConnected;
