import { UsersIcon } from "@/components/ui/customIcons";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import NavbarConnected from "./NavBarConnected";
import NavBarSection from "./NavBarSection";

const SideNavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="border-r py-4 md:py-8 bg-white">
      <div className="flex-1 flex-col items-start gap-1 px-4 w-full">
        {session && session.user?.email ? (
          <NavbarConnected />
        ) : (
          <NavBarSection
            title="Authentification"
            path="/auth"
            icon={<UsersIcon className="h-4 w-4" />}
            key="authentification"
          />
        )}
      </div>
    </nav>
  );
};
export default SideNavBar;
