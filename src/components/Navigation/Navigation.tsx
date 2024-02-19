import { FC, useEffect } from "react";

import { Chapter } from "../../types";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { useChapter } from "../../context/ChapterContext";

import styles from "./Navigation.module.scss";

type NavigationProps = {
  chapters: Chapter[];
};

export const Navigation: FC<NavigationProps> = ({ chapters }) => {
  const { setSelectedChapter } = useChapter();

  useEffect(() => {
    if (chapters && chapters.length > 0) {
      setSelectedChapter(chapters[0]);
    }
  }, [chapters, setSelectedChapter]);

  return (
    <nav className={styles.navigation}>
      {chapters.map((chapter) => (
        <NavigationItem
          level={chapter.level}
          key={chapter.id}
          chapter={chapter}
        />
      ))}
    </nav>
  );
};
