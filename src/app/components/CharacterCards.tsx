import CharacterCard, { CharacterCardProps } from "./CharacterCard";

const CharacterCards = ({
  characters,
}: {
  characters: CharacterCardProps[];
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
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
