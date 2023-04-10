import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Card from '../../../src/details/card/Card';
import Show from '../../../src/models/Show';
import Cover from '../../../src/models/Cover';

describe('Card', () => {
  it('should display image if image url exists', () => {
    const show = dummyShow({medium: 'existing-img-url'});

    render(<Card show={show} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual('existing-img-url');
  });

  it('should display default image if image url is empty string', () => {
    const show = dummyShow({medium: ''});

    render(<Card show={show} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });

  it('should display default image if image is null', () => {
    const show = dummyShow(null);

    render(<Card show={show} />);

    const image = screen.getByTestId('show-image');
    expect(image.props.source.uri).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });
});

const dummyShow = (image: Cover | null): Show => {
  return {
    id: 1,
    name: '',
    image: image,
    rating: {average: 0},
    summary: '',
    premiered: '',
    ended: '',
    language: '',
    genres: [],
    averageRuntime: 20,
  };
};
