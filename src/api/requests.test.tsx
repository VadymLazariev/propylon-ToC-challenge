import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getDocumentsStructure } from './requests';

import { chaptersDto } from '../test/mockData';

const mockAdapter = new MockAdapter(axios);

describe('getDocumentsStructure', () => {
  mockAdapter.onGet('/data').reply(200, chaptersDto);
  it('request all chapter using base url', async () => {
    await getDocumentsStructure();
    expect(mockAdapter.history['get'][0]['url']).toEqual('/data');
  });

  it('throw error if request responded with error object', async () => {
    console.error = {} as any;
    const mockErrorMessage = 'Could not get document structure';
    mockAdapter.onGet('/data').reply(500, {
      error: {
        code: 500,
        message: 'Could not get document structure',
      },
    });
    await expect(getDocumentsStructure()).rejects.toThrow(
        new Error(mockErrorMessage)
    );
  });
});