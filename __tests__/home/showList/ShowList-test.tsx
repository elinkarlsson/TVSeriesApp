import 'react-native';
import React from 'react';
import ShowList from '../../../src/home/showList/ShowList';
import SearchResult from '../../../src/models/SearchResult';
import {render, screen} from '@testing-library/react-native';
import Cover from '../../../src/models/Cover';

describe('ShowList', () => {
  it('should display all items in the list', () => {
    render(<ShowList searchResults={dummySearchResults} navigation={{}} />);

    expect(screen.getAllByTestId('show-item').length).toEqual(3);
  });

  it('should display name', () => {
    render(<ShowList searchResults={dummySearchResults} navigation={{}} />);

    expect(screen.getByText('Friends')).toBeDefined();
  });

  it('should display image if image url exists', () => {
    const searchResults = dummySearchResult({medium: 'existing-img-url'});

    render(<ShowList searchResults={searchResults} navigation={{}} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual('existing-img-url');
  });

  it('should display default image if image url is empty string', () => {
    const searchResults = dummySearchResult({medium: ''});

    render(<ShowList searchResults={searchResults} navigation={{}} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });

  it('should display default image if image is null', () => {
    const searchResults = dummySearchResult(null);

    render(<ShowList searchResults={searchResults} navigation={{}} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });
});

const dummySearchResults = [
  {
    score: 0.5,
    show: {
      id: 1,
      name: 'Friends',
      image: {
        medium: 'image-medium-url',
      },
      language: 'English',
      summary: 'This is a summary of the Friends TV series.',
      ended: '2021-01-01',
      premiered: '2020-01-01',
      genres: ['Drama', 'Comedy'],
      rating: {average: 8.9},
      averageRuntime: 22,
    },
  },
  {
    score: 0.4,
    show: {
      id: 2,
      name: 'Seinfeld',
      image: {
        medium: 'image-medium-url',
      },
      language: 'English',
      summary: 'This is a summary of the Seinfield TV series.',
      ended: '1998-05-14',
      premiered: '1989-07-05',
      genres: ['Comedy'],
      rating: {average: 7.8},
      averageRuntime: 20,
    },
  },
  {
    score: 0.3,
    show: {
      id: 3,
      name: 'Lost',
      image: {
        medium: 'image-medium-url',
      },
      language: 'English',
      summary: 'This is a summary of the Lost TV series.',
      ended: '2004-01-01',
      premiered: '2010-01-01',
      genres: ['Drama', 'Adventure', 'Fantasy'],
      rating: {average: 8.4},
      averageRuntime: 60,
    },
  },
] as SearchResult[];

const dummySearchResult = (image: Cover | null): SearchResult[] => {
  return [
    {
      score: 0.5,
      show: {
        id: 1,
        name: '',
        image: image,
        rating: {average: null},
        summary: '',
        premiered: '',
        ended: '',
        language: '',
        genres: [],
        averageRuntime: null,
      },
    },
  ];
};
