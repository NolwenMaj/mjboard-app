"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UserNameTooltip: React.FC = () => {
  const session = useSession();
  const user = session.data?.user;

  return <p>{user?.name ? user.name : user?.email}</p>;
};

export default UserNameTooltip;
