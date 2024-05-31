import { useSession } from "next-auth/react";

const UserNameTooltip = () => {
  const session = useSession();
  const user = session.data?.user;

  return <p>{user?.name ? user.name : user?.email}</p>;
};

export default UserNameTooltip;
