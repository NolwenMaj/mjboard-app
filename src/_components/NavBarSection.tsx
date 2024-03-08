import { Badge } from "@/_components/ui/badge";
import Link from "next/link";

export type NavBarSectionProps = {
  title: string;
  path: string;
  icon: React.ReactNode;
  total?: number;
};

export const NavBarSection = (navBarSection: NavBarSectionProps) => {
  return (
    <Link
      href={navBarSection.path}
      role="button"
      tabIndex={0}
      className="flex items-center gap-3 rounded-lg bg-gray-100 p-3 m-1 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {navBarSection.icon}
      {navBarSection.title}
      {navBarSection.total ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {navBarSection.total}
        </Badge>
      ) : undefined}
    </Link>
  );
};
export default NavBarSection;
