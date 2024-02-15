import { Chapter } from "../../../types";
import { FC, useState } from "react";
import styles from "./NavigationItems.module.scss";
import { ExpandIcon } from "../../../assets/icons/ExpandIcon";
import { useChapter } from "../../../context/ChapterContext";
import {TestRoles} from "../../../test/testRoles";

type NavigationItemProps = {
  chapter: Chapter;
  level: number;
};

export const NavigationItem: FC<NavigationItemProps> = ({ chapter, level }) => {
  const [expanded, setExpanded] = useState(false);
  const { selectedChapter, setSelectedChapter } = useChapter();
  const hasSubChapters = chapter.subChapters && chapter.subChapters.length > 0;

  const onClick = () => {
    if (hasSubChapters) {
      setExpanded(!expanded);
      if (expanded) {
        setSelectedChapter(null);
      } else {
        setSelectedChapter(chapter);
      }
    } else {
      setSelectedChapter(chapter);
    }
  };

  const chapterItemClassName = `${styles.chapterItem} ${
    styles[`level-${level}`]
  } ${expanded ? styles.expanded : ""} ${
    selectedChapter?.id === chapter.id ? styles.selectedNavItem : ""
  }`;

  return (
    <div>
      <div role={TestRoles.NavItem} className={chapterItemClassName} onClick={onClick}>
        {hasSubChapters && (
          <div
            className={`${styles.expandIcon} ${styles[`level-icon-${level}`]} ${
              expanded ? styles.iconExpanded : ""
            }`}
          >
            <ExpandIcon/>
          </div>
        )}
        {chapter.name}
      </div>
      {hasSubChapters && expanded && (
        <div className={styles.subChapters}>
          {chapter.subChapters.map((subChapter) => (
            <NavigationItem
              key={subChapter.id}
              chapter={subChapter}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
