import { MenuSection, MenuSectionProps } from "./MenuSection";

const SideMenu = ({ tabs }: { tabs: MenuSectionProps[] }) => {
  return (
    <nav className="flex flex-col items-start gap-1 px-4 w-full">
      {tabs.map((tab: MenuSectionProps) => (
        <MenuSection
          title={tab.title}
          total={4}
          path={tab.path}
          icon={tab.icon}
          key={tab.title}
        />
      ))}
    </nav>
  );
};

export default SideMenu;
