import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "@/components/ui/customIcons";
import Link from "next/link";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";

const CharacterCards = ({
  characters,
}: {
  characters: CharacterCardProps[];
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Link href="/protected/newCharacterSheet">
        <Card className="flex flex-row items-center justify-between pb-2 space-y-0 h-full">
          <CardContent>Nouveau personnage</CardContent>
          <ChevronRightIcon className="w-4 h-4" />
        </Card>
      </Link>
      {characters.map((character: CharacterCardProps) => (
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
  );
};

export default CharacterCards;
