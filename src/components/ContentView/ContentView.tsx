import { FC, useEffect, useState } from "react";

import { useChapter } from "../../context/ChapterContext";
import { Chapter } from "../../types";
import {TestRoles} from "../../test/testRoles";

import styles from "./ContentView.module.scss";


function findChapterById(chapters: Chapter[], id: string): Chapter | null {
  let result = null;

  for (const chapter of chapters) {
    if (chapter.id === id) {
      return chapter;
    }
    if (chapter.subChapters) {
      result = findChapterById(chapter.subChapters, id);
      if (result) {
        return result;
      }
    }
  }

  return result;
}

type ContentViewProps = {
  chapters: Chapter[] | undefined;
};

export const ContentView: FC<ContentViewProps> = ({ chapters }) => {
  const { selectedChapter } = useChapter();

  const [subChapters, setSubChapters] = useState<Chapter[]>([]);

  const selectedParentChapter = !selectedChapter?.parent_id
    ? selectedChapter
    : undefined;

  useEffect(() => {
    if (!selectedChapter) {
      setSubChapters([]);
      return;
    }

    if (!chapters) {
      return undefined;
    }
    const findSubChapters = (chapters: Chapter[], parentId: string) => {
      if (!parentId) return [];
      const parentChapter = findChapterById(chapters, parentId);
      return parentChapter ? parentChapter.subChapters : [];
    };

    const newSubChapters = selectedChapter.parent_id
      ? findSubChapters(chapters, selectedChapter.parent_id)
      : selectedChapter.subChapters || [];

    setSubChapters(newSubChapters);
  }, [selectedChapter, chapters]);

  if (!selectedChapter) {
    return <div>Select a chapter to view its components.</div>;
  }

  return (
    <div>
      <div>
        {selectedParentChapter && (
          <div>
            <h3>{selectedParentChapter?.name}</h3>
            <div role={TestRoles.ContentViewParentChapter}
              className={
                selectedParentChapter.id === selectedChapter.id
                  ? styles.selectedChapter
                  : ""
              }
            >
              {selectedParentChapter?.content}
            </div>
          </div>
        )}
      </div>
      {!selectedParentChapter &&
        subChapters.map((subChapter) => (
          <div   key={subChapter?.id}>
            <h3>{subChapter?.name}</h3>
            <div role={TestRoles.ContentViewChildChapter}
              className={
                subChapter.id === selectedChapter.id ? styles.selectedChapter : ""
              }
            >
              {subChapter?.content}
            </div>
          </div>
        ))}
    </div>
  );
};
