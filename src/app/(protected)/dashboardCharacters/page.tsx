"use client";
import CharacterCard, { CharacterCardProps } from "@/_components/CharacterCard";
import { mockCharacters } from "@/_utils/mockDatas";

import { Card, CardContent } from "@/_components/ui/card";
import { ChevronRightIcon } from "@/_components/ui/customIcons";
import Link from "next/link";

const DashboardCharacters = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/newCharacterSheet">
            <Card className="flex flex-row items-center justify-between pb-2 space-y-0 h-full">
              <CardContent>Nouveau personnage</CardContent>
              <ChevronRightIcon className="w-4 h-4" />
            </Card>
          </Link>
          {mockCharacters.map((character: CharacterCardProps) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              description={character.description}
              level={character.level}
              hp={character.hp}
              class={character.class}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardCharacters;
