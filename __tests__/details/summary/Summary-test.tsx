import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Summary from '../../../src/details/summary/Summary';

describe('Summary', () => {
  it('should display summary correctly if string is not html formatted.', () => {
    render(<Summary text="Example summary text" />);

    expect(screen.getByText('Example summary text')).toBeDefined();
  });

  it('should display summary correctly if string is html formatted.', () => {
    render(<Summary text="<p>Example <i>summary</i> text</p>" />);

    expect(screen.getByText('Example summary text')).toBeDefined();
  });

  it('should not display html-tags', () => {
    render(<Summary text="<p>Example <i>summary</i> text</p>" />);

    expect(screen.queryByText('<p>Example <i>summary</i> text</p>')).toBeNull();
  });
});
