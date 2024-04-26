"use client";

import { createContext, useContext } from "react";

type Data = { name: string };

const defaultData = { name: "Nolwen" };

const DataContext = createContext<Data>(defaultData);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={defaultData}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
