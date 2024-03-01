import { Badge } from "@/components/ui/badge";

export type MenuSectionProps = {
  title: string;
  onpress: () => void;
  icon: React.ReactNode;
  total?: number;
};

export const MenuSection = (menuSection: MenuSectionProps) => {
  return (
    <main
      onClick={menuSection.onpress}
      role="button"
      tabIndex={0}
      className="flex items-center gap-3 rounded-lg bg-gray-100 p-3 m-1 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {menuSection.icon}
      {menuSection.title}
      {menuSection.total ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {menuSection.total}
        </Badge>
      ) : undefined}
    </main>
  );
};
export default MenuSection;
