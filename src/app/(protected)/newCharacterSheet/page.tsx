import { Button } from "@/lib/_components/ui/button";
import { FileEditIcon } from "@/lib/_components/ui/customIcons";
import { Input } from "@/lib/_components/ui/input";

export default function NewCharacterSheet() {
  return (
    <div className="w-full overflow-hidden">
      <div className="grid max-w-4xl gap-4 min-h-[1200px] mx-auto px-4">
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold tracking-tighter">
            Character Name
          </h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="race"
                >
                  Race
                </label>
                <Input id="race" placeholder="Human" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="class"
                >
                  Class
                </label>
                <Input id="class" placeholder="Wizard" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="level"
                >
                  Level
                </label>
                <Input id="level" placeholder="1" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="alignment"
                >
                  Alignment
                </label>
                <Input id="alignment" placeholder="Neutral" />
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                {/* <img
                  alt="Avatar"
                  className="object-cover w-full h-full"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                /> */}
              </div>
              <Button className="h-8 w-8 ml-auto shrink-0" variant="outline">
                <FileEditIcon className="w-4 h-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold tracking-tighter">Attributes</h2>
            <div className="grid gap-1 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="strength"
                >
                  Strength
                </label>
                <Input id="strength" placeholder="10" type="number" />
                <Input disabled id="strength-modifier" placeholder="0" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="dexterity"
                >
                  Dexterity
                </label>
                <Input id="dexterity" placeholder="10" type="number" />
                <Input disabled id="dexterity-modifier" placeholder="0" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="constitution"
                >
                  Constitution
                </label>
                <Input id="constitution" placeholder="10" type="number" />
                <Input disabled id="constitution-modifier" placeholder="0" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="intelligence"
                >
                  Intelligence
                </label>
                <Input id="intelligence" placeholder="10" type="number" />
                <Input disabled id="intelligence-modifier" placeholder="0" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="wisdom"
                >
                  Wisdom
                </label>
                <Input id="wisdom" placeholder="10" type="number" />
                <Input disabled id="wisdom-modifier" placeholder="0" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="charisma"
                >
                  Charisma
                </label>
                <Input id="charisma" placeholder="10" type="number" />
                <Input disabled id="charisma-modifier" placeholder="0" />
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
            <div className="grid gap-1 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="acrobatics"
                >
                  Acrobatics
                </label>
                <Input id="acrobatics" placeholder="5" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="arcana"
                >
                  Arcana
                </label>
                <Input id="arcana" placeholder="3" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="athletics"
                >
                  Athletics
                </label>
                <Input id="athletics" placeholder="2" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="deception"
                >
                  Deception
                </label>
                <Input id="deception" placeholder="1" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="insight"
                >
                  Insight
                </label>
                <Input id="insight" placeholder="4" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="intimidation"
                >
                  Intimidation
                </label>
                <Input id="intimidation" placeholder="2" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="investigation"
                >
                  Investigation
                </label>
                <Input id="investigation" placeholder="3" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="medicine"
                >
                  Medicine
                </label>
                <Input id="medicine" placeholder="2" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="nature"
                >
                  Nature
                </label>
                <Input id="nature" placeholder="1" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="perception"
                >
                  Perception
                </label>
                <Input id="perception" placeholder="4" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="performance"
                >
                  Performance
                </label>
                <Input id="performance" placeholder="3" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="persuasion"
                >
                  Persuasion
                </label>
                <Input id="persuasion" placeholder="5" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="religion"
                >
                  Religion
                </label>
                <Input id="religion" placeholder="2" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="sleight-of-hand"
                >
                  Sleight of Hand
                </label>
                <Input id="sleight-of-hand" placeholder="3" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="stealth"
                >
                  Stealth
                </label>
                <Input id="stealth" placeholder="4" type="number" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="survival"
                >
                  Survival
                </label>
                <Input id="survival" placeholder="2" type="number" />
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold tracking-tighter">Equipment</h2>
            <div className="grid gap-1 md:grid-cols-2">
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="weapon-1"
                >
                  Weapon 1
                </label>
                <Input id="weapon-1" placeholder="Dagger" />
                <Input id="weapon-1-description" placeholder="1d4 piercing" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="weapon-2"
                >
                  Weapon 2
                </label>
                <Input id="weapon-2" placeholder="Staff" />
                <Input
                  id="weapon-2-description"
                  placeholder="1d6 bludgeoning"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="armor"
                >
                  Armor
                </label>
                <Input id="armor" placeholder="Robes" />
                <Input id="armor-description" placeholder="AC +1" />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="item-1"
                >
                  Item 1
                </label>
                <Input id="item-1" placeholder="Potion of Healing" />
                <Input
                  id="item-1-description"
                  placeholder="Restores 2d4+2 HP"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label
                  className="text-sm font-semibold min-w-[100px]"
                  htmlFor="item-2"
                >
                  Item 2
                </label>
                <Input id="item-2" placeholder="Scroll of Fireball" />
                <Input
                  id="item-2-description"
                  placeholder="Casts Fireball spell"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-bold tracking-tighter">Abilities</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Magic Missile</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You create three glowing darts of magical force. Each dart
                    hits a creature of your choice that you can see within
                    range. A dart deals 1d4 + 1 force damage to its target.
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Burning Hands</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    As you hold your hands with thumbs touching and fingers
                    spread, a thin sheet of flames shoots forth from your
                    outstretched fingertips. Each creature in a 15-foot cone
                    must make a Dexterity saving throw. A creature takes 3d6
                    fire damage on a failed save, or half as much damage on a
                    successful one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
