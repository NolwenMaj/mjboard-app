import { MenuSection, MenuSectionProps } from "./MenuSection";

const SideMenu = ({
  tabs,
  onCharacterSectionClick,
  onNotesSectionClick,
}: {
  tabs: MenuSectionProps[];
  onCharacterSectionClick: () => void;
  onNotesSectionClick: () => void;
}) => {
  return (
    <nav className="flex-1 flex-col items-start gap-1 px-4 w-full">
      {tabs.map((tab: MenuSectionProps) => (
        <MenuSection
          title={tab.title}
          total={tab.total}
          onpress={
            tab.title === "Personnages"
              ? onCharacterSectionClick
              : onNotesSectionClick
          }
          icon={tab.icon}
          key={tab.title}
        />
      ))}
    </nav>
  );
};

export default SideMenu;
