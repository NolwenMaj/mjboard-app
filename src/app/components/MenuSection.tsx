import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type MenuSectionProps = {
  title: string;
  path: string;
  total: number;
  icon: React.ReactNode;
};

export const MenuSection = ({ title, total, path, icon }: MenuSectionProps) => {
  return (
    <Link
      className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
      href={path}
    >
      {icon}
      {title}
      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {total}
      </Badge>
    </Link>
  );
};
export default MenuSection;
