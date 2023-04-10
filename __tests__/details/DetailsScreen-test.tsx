import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import DetailsScreen from '../../src/details/DetailsScreen';
import {AxiosResponse} from 'axios';
import Show from '../../src/models/Show';

const apiService = require('../../src/services/api.service');

describe('DetailsScreen', () => {
  it('should display name', async () => {
    MockApiCalls();

    render(<DetailsScreen route={{params: {name: 1}}} />);

    expect(await screen.findByText('Friends')).toBeTruthy();
  });
});

export const MockApiCalls = () => {
  jest.spyOn(apiService, 'GetShowById').mockImplementation(
    () =>
      new Promise<AxiosResponse<Show>>(resolve => {
        resolve(dummyResponse);
      }),
  );
};

const dummyResponse = {
  data: {
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
  } as Show,
} as AxiosResponse<Show>;
