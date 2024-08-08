"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export const useUpdateName = () => {
  const [loading, setLoading] = useState(false);
  const { data: session, update } = useSession();
  const [pseudo, setPseudo] = useState(session?.user?.name);

  const updateName = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/user/update-name", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pseudo }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      if (response.status === 200) {
        await update();
      }
      console.log(`Name was successfully updated to ${session?.user?.name}`);
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    pseudo,
    setPseudo,
    loading,
    updateName,
  };
};
