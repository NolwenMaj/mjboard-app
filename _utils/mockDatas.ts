import { CharacterCardProps } from "../_components/CharacterCard";
import { NoteProps } from "../_components/Note";

export const mockCharacters: CharacterCardProps[] = [
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

export const mockNotes: NoteProps[] = [
  {
    id: 1,
    title: "Rencontre avec le sorcier Malakar",
    date: new Date("2024-02-16"),
    content:
      "Malakar, le sorcier mystérieux, nous a donné une quête pour retrouver l'ancien artefact perdu dans la forêt interdite.",
  },
  {
    id: 2,
    title: "Exploration des ruines anciennes",
    date: new Date("2024-02-17"),
    content:
      "Nous avons exploré les ruines anciennes au nord du village et découvert des inscriptions énigmatiques gravées sur les murs.",
  },
  {
    id: 3,
    title: "Rencontre avec les elfes des bois",
    date: new Date("2024-02-18"),
    content:
      "Les elfes des bois nous ont confié une mission pour protéger leur forêt sacrée des forces obscures qui la menacent.",
  },
  {
    id: 4,
    title: "Bataille épique contre le dragon noir",
    date: new Date("2024-02-19"),
    content:
      "Nous avons affronté le redoutable dragon noir dans les montagnes de l'ouest et sauvé le royaume de la destruction imminente.",
  },
];

export const mockTable = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    background_picture: "cyberpunk.jpg",
    description:
      "Explorez Night City, une mégalopole obsédante à la recherche de la clé de l'immortalité.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "The Witcher 3: Wild Hunt",
    background_picture: "witcher.jpg",
    description:
      "Plongez dans un monde fantastique rempli de monstres, de magie et de mystère, où chaque choix compte.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    background_picture: "reddead.jpg",
    description:
      "Partez à l'aventure dans l'ouest sauvage, explorez des paysages magnifiques et affrontez les dangers de la frontière.",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
