import {screen, waitFor} from '@testing-library/react';

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
const mockAdapter = new MockAdapter(axios);
import {customRender} from '../../test/renderWithProviders';
import {TableOfContents} from "./TableOfContents";
import {chaptersDto} from "../../test/mockData";
import {TestRoles} from "../../test/testRoles";
import userEvent from "@testing-library/user-event";

axios.interceptors.response.use((response) => response.data);

describe( '<TableOfContents/>', () => {
    it('Table of contents renders data', async () => {
        mockAdapter.onGet('/data').replyOnce(200, chaptersDto);
        customRender(<TableOfContents />);
        const chapters = await screen.findAllByText('Chapter 1');
        expect(chapters[0]).toBeInTheDocument();
    });

    it('select first element of nav item', async () => {
        mockAdapter.onGet('/data').replyOnce(200, chaptersDto);
        customRender(<TableOfContents />);
        const chapters = await screen.findAllByRole(TestRoles.NavItem);
        await waitFor( () => {
            expect(chapters[0]).toHaveClass('selectedNavItem');
        })
    });

    it('select element by click', async () => {
        mockAdapter.onGet('/data').replyOnce(200, chaptersDto);
        customRender(<TableOfContents />);
        const chapters = await screen.findAllByRole(TestRoles.NavItem);
        userEvent.click(chapters[3]);
        await waitFor( () => {
            expect(chapters[3]).toHaveClass('selectedNavItem');
        })
    });

    it('select element in <ContentView/> component when nav item selected', async () => {
        mockAdapter.onGet('/data').replyOnce(200, chaptersDto);
        customRender(<TableOfContents />);

        const chapters = await screen.findAllByRole(TestRoles.NavItem);
        const contentViewChapter = await screen.findByRole(TestRoles.ContentViewParentChapter);

        userEvent.click(chapters[3]);

        await waitFor( () => {
            expect(chapters[3]).toHaveClass('selectedNavItem');
            expect(contentViewChapter).toHaveClass('selectedChapter');
        })
    });
});