import { Chapter } from '../types';
import {transformToHierarchy} from "./tranformToHierarchy";

describe('transformToHierarchy', () => {
    it('transforms a flat array of chapters into a hierarchical structure', () => {
        const chapters: Chapter[] = [
            { id: '1', name: 'Chapter 1', level: 1, parent_id: '', subChapters: [] },
            { id: '2', name: 'Subchapter 1.1', level: 2, parent_id: '1', subChapters: [] },
            { id: '3', name: 'Chapter 2', level: 1, parent_id: '', subChapters: [] },
        ];

        const result = transformToHierarchy(chapters);
        expect(result).toHaveLength(2);
        expect(result[0].subChapters).toHaveLength(1);
        expect(result[0].subChapters[0].name).toBe('Subchapter 1.1');
        expect(result[1].name).toBe('Chapter 2');
    });

    it('treats chapters with non-existent parents as root chapters', () => {
        const chapters: Chapter[] = [
            { id: '1', name: 'Orphan Subchapter', level: 2, parent_id: '999', subChapters: [] },
            { id: '2', name: 'Chapter 1', level: 1, parent_id: '', subChapters: [] },
        ];

        const result = transformToHierarchy(chapters);
        expect(result).toHaveLength(2);
        expect(result.find(chapter => chapter.id === '1')).toBeDefined();
        expect(result.find(chapter => chapter.id === '2')).toBeDefined();
    });


    it('handles deeply nested subchapters correctly', () => {
        const chapters: Chapter[] = [
            { id: '1', name: 'Chapter 1', level: 1, parent_id: '', subChapters: [] },
            { id: '2', name: 'Subchapter 1.1', level: 2, parent_id: '1', subChapters: [] },
            { id: '3', name: 'Subchapter 1.1.1', level: 3, parent_id: '2', subChapters: [] },
        ];

        const result = transformToHierarchy(chapters);
        expect(result[0].subChapters[0].subChapters).toHaveLength(1);
        expect(result[0].subChapters[0].subChapters[0].name).toBe('Subchapter 1.1.1');
    });

    it('handles an empty array input gracefully', () => {
        const chapters: Chapter[] = [];

        const result = transformToHierarchy(chapters);
        expect(result).toEqual([]);
    });
});
