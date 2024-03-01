import { CharacterCardProps } from "./CharacterCard";
import CharacterCards from "./CharacterCards";

type CharactersCardsProps = CharacterCardProps[];

export const CharactersDashboard = ({
  characters,
}: {
  characters: CharactersCardsProps;
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <CharacterCards characters={characters} />
    </div>
  );
};
