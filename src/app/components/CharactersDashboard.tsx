import CharacterCards from "./CharacterCards";

const characters = [
  {
    id: 1,
    name: "Gandalf",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    hp: " HP 100/100",
    class: "magicien",
    level: 10,
  },
  {
    id: 2,
    name: "The Goblin King",
    description: "The fearsome leader of the goblin horde.",
    hp: " HP 50/50",
    class: "guerrier",
    level: 4,
  },
];
export const CharactersDashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
      <CharacterCards characters={characters} />
    </div>
  );
};
