import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {AxiosResponse} from 'axios';
import HomeScreen from '../../src/home/HomeScreen';
import SearchResult from '../../src/models/SearchResult';

const apiService = require('../../src/services/api.service');

describe('HomeScreen', () => {
  it('should display title', async () => {
    MockApiCalls();

    render(<HomeScreen navigation={{}} />);

    expect(await screen.findByText('TV Series Search App!')).toBeDefined();
  });

  it('should display description', async () => {
    MockApiCalls();

    render(<HomeScreen navigation={{}} />);

    expect(
      await screen.findByText(
        'Use the search input below to find interesting TV series and read more about them.',
      ),
    ).toBeDefined();
  });
});

export const MockApiCalls = () => {
  jest.spyOn(apiService, 'SearchShow').mockImplementation(
    () =>
      new Promise<AxiosResponse<SearchResult>>(resolve => {
        resolve(dummyResponse);
      }),
  );
};

const dummyResponse = {
  data: {
    score: 1,
    show: {
      id: 1,
      name: 'Friends',
      image: {
        medium: 'image-medium-url',
      },
      language: 'English',
      summary: 'This is a summary of the show.',
      ended: '2021-01-01',
      premiered: '2020-01-01',
      genres: ['Drama', 'Comedy'],
    },
  } as SearchResult,
} as AxiosResponse<SearchResult>;
