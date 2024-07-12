import Link from "next/link";

export type NavBarSectionProps = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

export const NavBarSection = (navBarSection: NavBarSectionProps) => {
  return (
    <Link
      href={navBarSection.path}
      role="button"
      tabIndex={0}
      className="m-1 flex items-center gap-3 rounded-lg bg-gray-100 p-3 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
    >
      {navBarSection.icon}
      {navBarSection.title}
    </Link>
  );
};
export default NavBarSection;
