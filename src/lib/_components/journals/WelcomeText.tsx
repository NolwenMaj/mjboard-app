"use client";
import { useSession } from "next-auth/react";
import React from "react";

const WelcomeText: React.FC = () => {
  const session = useSession();

  return <p>Bienvenue sur Journaling {session.data?.user?.name} !</p>;
};

export default WelcomeText;
