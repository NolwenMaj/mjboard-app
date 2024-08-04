import { ScrollIcon, UsersIcon } from "../ui/customIcons";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";

const SideNavBar = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
    {
      title: "Journaux",
      path: "/journals",
      icon: <ScrollIcon />,
    },
    {
      title: "Compte",
      path: "/account",
      icon: <UsersIcon />,
    },
  ];

  return (
    <nav className="sticky top-4 z-10 m-1 flex flex-col gap-1">
      {tabsUserConnected.map((tab) => (
        <NavBarSection
          title={tab.title}
          path={tab.path}
          icon={tab.icon}
          key={tab.title}
        />
      ))}
    </nav>
  );
};
export default SideNavBar;
