import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import {
  ChevronRightIcon,
  HeartIcon,
  ShieldIcon,
} from "@/_components/ui/customIcons";
import { useData } from "./DataProvider";

export type CharacterCardProps = {
  id: number;
  name: string;
  description: string;
  level?: number;
  hp?: string;
  class?: string;
};

export const CharacterCard = (character: CharacterCardProps) => {
  const { name } = useData();
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div className="flex flex-col">
          <CardTitle className="text-lg font-semibold">
            {character.name}
          </CardTitle>
          <CardDescription className="text-sm">
            {character.description}
          </CardDescription>
        </div>
        <ChevronRightIcon className="w-4 h-4" />
      </CardHeader>
      <CardContent>
        <p>{name}</p>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium"> Niveau : {character.level}</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">{character.hp}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="font-medium">{character.class}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default CharacterCard;
