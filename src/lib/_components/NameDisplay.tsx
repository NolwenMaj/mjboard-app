"use client";
import { useSession } from "next-auth/react";

const NameDisplay = () => {
  const { data } = useSession();
  return (
    <h1 className="text-left text-3xl font-bold text-gray-900 ">
      {data?.user?.name}
    </h1>
  );
};

export default NameDisplay;
