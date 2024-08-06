"use client";
import { Journal } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { CircleXmark } from "../ui/customIcons";

export const DeleteJournalButton = ({
  journalId,
}: {
  journalId: Journal["id"];
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/journal", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ journalId }),
      });
      console.log(response);
      router.refresh();
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Erreur lors de la suppression du journal."
        );
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button type="submit" onClick={handleDelete} disabled={loading}>
      {loading ? "Suppression..." : <CircleXmark />}
    </Button>
  );
};
