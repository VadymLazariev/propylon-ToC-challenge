import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChapterProvider, useChapter } from './ChapterContext';

const mockChapter = {
    id: '1',
    name: 'Test Chapter',
    level: 1,
    parent_id: '',
    content: 'This is a test chapter.',
    subChapters: [],
};

const TestComponent = () => {
    const { selectedChapter, setSelectedChapter } = useChapter();

    return (
        <>
            <div>{selectedChapter ? selectedChapter.name : 'No Chapter Selected'}</div>
            <button onClick={() => setSelectedChapter(mockChapter)}>Select Chapter</button>
        </>
    );
};

describe('ChapterContext', () => {
    it('provides the initial state as null', () => {
        render(
            <ChapterProvider>
                <TestComponent />
            </ChapterProvider>
        );

        expect(screen.getByText('No Chapter Selected')).toBeInTheDocument();
    });

    it('updates the selectedChapter when setSelectedChapter is called', async () => {
        render(
            <ChapterProvider>
                <TestComponent />
            </ChapterProvider>
        );

        await userEvent.click(screen.getByText('Select Chapter'));
        expect(screen.getByText('Test Chapter')).toBeInTheDocument();
    });

    it('throws an error when useChapter is used outside of ChapterProvider', () => {
        const originalError = console.error;
        console.error = jest.fn();

        const attemptToUseHookOutsideProvider = () => {
            render(<TestComponent />);
        };

        expect(attemptToUseHookOutsideProvider).toThrowError();

        console.error = originalError;
    });
});
