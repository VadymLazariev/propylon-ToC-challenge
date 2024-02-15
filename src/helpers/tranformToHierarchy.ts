import { Chapter } from "../types";

export const transformToHierarchy = (chapters: Chapter[]): Chapter[] => {
  const chapterMap: { [key: string]: Chapter } = {};
  const rootChapters: Chapter[] = [];

  chapters.forEach((chapter) => {
    chapterMap[chapter.id] = { ...chapter, subChapters: [] };
  });

  chapters.forEach((chapter) => {
    if (chapter.parent_id && chapterMap[chapter.parent_id]) {
      // If the parent exists, add to its subChapters
      chapterMap[chapter.parent_id].subChapters.push(chapterMap[chapter.id]);
    } else {
      // Treat as a root chapter if parent_id does not exist or does not reference a valid chapter
      rootChapters.push(chapterMap[chapter.id]);
    }
  });

  return rootChapters;
};

