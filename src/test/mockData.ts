import {Chapter} from "../types";

export const chaptersDto: Chapter[] = [
    {
        id: '1',
        name: 'Chapter 1',
        level: 1,
        parent_id: '',
        content: 'Content of Chapter 1',
        subChapters: [],
    },
    {
        id: '2',
        name: 'Chapter 2',
        level: 1,
        parent_id: '',
        content: 'Content of Chapter 2',
        subChapters: [],
    },
    {
        id: '3',
        name: 'Chapter 3',
        level: 1,
        parent_id: '',
        content: 'Content of Chapter 3',
        subChapters: [
            {
                id: '3.1',
                name: 'Subchapter 3.1',
                level: 2,
                parent_id: '3',
                content: 'Content of Subchapter 3.1',
                subChapters: [],
            },
        ],
    },
    {
        id: '4',
        name: 'Chapter 4',
        level: 1,
        parent_id: '',
        content: 'Content of Chapter 4',
        subChapters: [],
    },
    {
        id: '5',
        name: 'Chapter 5',
        level: 1,
        parent_id: '',
        content: 'Content of Chapter 5',
        subChapters: [],
    },
];
