"use client";
import CharacterCard from "@/_components/CharacterCard";
import { mockTable } from "@/_utils/mockDatas";

import { Card, CardContent } from "@/_components/ui/card";
import { ChevronRightIcon } from "@/_components/ui/customIcons";
import Link from "next/link";

const TableChoice = () => {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/inConstruction">
            <Card className="flex flex-row items-center justify-between pb-2 space-y-0 h-full">
              <CardContent>Nouvelle table</CardContent>
              <ChevronRightIcon className="w-4 h-4" />
            </Card>
          </Link>
          {mockTable.map((table) => (
            <CharacterCard
              key={table.id}
              id={table.id}
              name={table.name}
              description={table.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default TableChoice;
