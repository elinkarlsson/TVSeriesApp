import 'react-native';
import {getImageUriOrDefault} from '../../src/utils/Image.utility';

describe('sortSearchResultByScore', () => {
  it('should return default image uri if image is null.', () => {
    const image = null;

    const actual = getImageUriOrDefault(image);

    expect(actual).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });

  it('should return default image uri if image is empty string.', () => {
    const image = {medium: ''};

    const actual = getImageUriOrDefault(image);

    expect(actual).toEqual(
      'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    );
  });

  it('should return image medium uri if it exists', () => {
    const image = {medium: 'existing-uri'};

    const actual = getImageUriOrDefault(image);

    expect(actual).toEqual('existing-uri');
  });
});
