import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Show from '../../../src/models/Show';
import Info from '../../../src/details/info/Info';

describe('Info', () => {
  it('should display rating correctly', () => {
    const show = dummyShow();
    render(<Info show={show} />);

    expect(screen.getByText('6.1')).toBeDefined();
    expect(screen.getByText('/10')).toBeDefined();
  });

  it('should not display rating text if rating is empty', () => {
    const show = emptyShow();
    render(<Info show={show} />);

    expect(screen.queryByText('/10')).toBeNull();
  });

  it('should display average runtime correctly', () => {
    const show = dummyShow();
    render(<Info show={show} />);

    expect(screen.getByText(/20m/i)).toBeDefined();
  });

  it('should not display average runtime text if average runtime is empty', () => {
    const show = emptyShow();
    render(<Info show={show} />);

    expect(screen.queryByText('m')).toBeNull();
  });

  it('should display language correctly', () => {
    const show = dummyShow();
    render(<Info show={show} />);

    expect(screen.getByText('Language: English')).toBeDefined();
  });

  it('should not display language text if language is empty', () => {
    const show = emptyShow();
    render(<Info show={show} />);

    expect(screen.queryByText('Language:')).toBeNull();
  });

  it('should display genres correctly', () => {
    const show = dummyShow();
    render(<Info show={show} />);

    expect(screen.getByText('Comedy, Drama')).toBeDefined();
  });

  it('should display premiered date correctly', () => {
    const show = dummyShow();

    render(<Info show={show} />);

    expect(screen.findByText('Released: 2015-01-01')).toBeDefined();
  });

  it('should not display released text if premiered is empty', () => {
    const show = dummyShow();

    render(<Info show={show} />);

    expect(screen.queryByText('Released:')).toBeNull();
  });

  it('should display ended date correctly', () => {
    const show = dummyShow();

    render(<Info show={show} />);

    expect(screen.findByText('Ended: 2020-01-01')).toBeDefined();
  });

  it('should not display ended text if ended is empty', () => {
    const show = emptyShow();

    render(<Info show={show} />);

    expect(screen.queryByText('Ended: 2020-01-01')).toBeNull();
  });
});

const dummyShow = (): Show => {
  return {
    id: 1,
    name: 'Friends',
    image: {medium: 'img-medium'},
    rating: {average: 6.1},
    summary: 'This is a summary.',
    premiered: '2015-01-01',
    ended: '2020-01-01',
    language: 'English',
    genres: ['Comedy', 'Drama'],
    averageRuntime: 20,
  };
};

const emptyShow = (): Show => {
  return {
    id: 1,
    name: '',
    image: null,
    rating: {average: null},
    summary: '',
    premiered: '',
    ended: '',
    language: '',
    genres: [],
    averageRuntime: null,
  };
};
