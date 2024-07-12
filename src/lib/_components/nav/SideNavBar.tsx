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
    <nav className="border-r bg-white py-4 md:py-8">
      <div className="flex-1 flex-col items-start gap-1 overflow-y-auto px-4">
        {tabsUserConnected.map((tab) => (
          <NavBarSection
            title={tab.title}
            path={tab.path}
            icon={tab.icon}
            key={tab.title}
          />
        ))}
      </div>
    </nav>
  );
};
export default SideNavBar;
