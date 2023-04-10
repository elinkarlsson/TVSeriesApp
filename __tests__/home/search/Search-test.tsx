import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Search from '../../../src/home/search/Search';

describe('Search', () => {
  it('should display correct placeholder in input field', () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByPlaceholderText('Search...')).toBeDefined();
  });

  it('should call function onSearch on search button click', () => {
    const onSearchPress = jest.fn();

    render(<Search onSearch={onSearchPress} />);
    const button = screen.getByTestId('button');
    fireEvent.press(button);

    expect(onSearchPress).toHaveBeenCalledTimes(1);
  });

  it('should call function onSearch with correct parameters', () => {
    const onSearchPress = jest.fn();

    render(<Search onSearch={onSearchPress} />);
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');
    fireEvent.changeText(input, 'abc');
    fireEvent.press(button);

    expect(onSearchPress).toHaveBeenCalledWith('abc');
  });
});
