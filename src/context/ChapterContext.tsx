import React, { createContext, useContext, useState, ReactNode } from "react";
import { Chapter } from "../types";

type ChapterContextType = {
  selectedChapter: Chapter | null;
  setSelectedChapter: (chapter: Chapter | null) => void;
};

const ChapterContext = createContext<ChapterContextType | undefined>(undefined);

interface ChapterProviderProps {
  children: ReactNode;
}

export const ChapterProvider: React.FC<ChapterProviderProps> = ({
  children,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  return (
    <ChapterContext.Provider value={{ selectedChapter, setSelectedChapter }}>
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapter = () => {
  const context = useContext(ChapterContext);
  if (context === undefined) {
    throw new Error("useChapter must be used within a ChapterProvider");
  }
  return context;
};
