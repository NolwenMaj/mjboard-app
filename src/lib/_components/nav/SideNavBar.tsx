import { ScrollIcon } from "../ui/customIcons";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";
import UserIconWithTooltip from "./UserIconWithTooltip";

const SideNavBar = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
    {
      title: "Journaux",
      path: "/journals",
      icon: <ScrollIcon className="size-4" />,
    },
    {
      title: "Compte",
      path: "/account",
      icon: <UserIconWithTooltip />,
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
