import { FC, ReactElement, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { render, RenderOptions } from '@testing-library/react';
import {ChapterProvider} from "../context/ChapterContext";

export const testQueryClient = new QueryClient();

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
   return(
       <ChapterProvider>
           <QueryClientProvider client={testQueryClient}>
               {children}
           </QueryClientProvider>
       </ChapterProvider>

   );
};

export const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });