import AvatarAccount from "./AvatarAccount";
import NavBarSection, { NavBarSectionProps } from "./NavBarSection";
import { ScrollIcon } from "./ui/customIcons";

const SideNavBar = () => {
  const tabsUserConnected: NavBarSectionProps[] = [
    {
      title: "Notes séances",
      path: "/dashboard-notes",
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
