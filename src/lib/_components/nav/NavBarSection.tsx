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
      className="inline-flex items-center gap-1 rounded-md bg-secondary/30 p-2 font-light text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
    >
      <span className="hidden md:block">{navBarSection.icon}</span>
      {navBarSection.title}
    </Link>
  );
};
export default NavBarSection;
