"use client";
import { createContext, useContext, useState } from "react";

const SearchContext = createContext<{ searchTerm: string; setSearchTerm: (term: string) => void } | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Não há itens a serem pesquisados aqui");
  }
  return context;
};
