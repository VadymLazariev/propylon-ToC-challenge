import { Chapter } from "../../types";
import { FC, useEffect } from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import styles from "./Navigation.module.scss";
import { useChapter } from "../../context/ChapterContext";

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
