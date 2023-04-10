import 'react-native';
import {sortSearchResultByScore} from '../../src/utils/SearchResult.utility';
import SearchResult from '../../src/models/SearchResult';

describe('sortSearchResultByScore', () => {
  it('should return empty array if input is empty array.', () => {
    const searchResults = [] as SearchResult[];

    const actual = sortSearchResultByScore(searchResults);

    const expected = [] as SearchResult[];
    expect(actual).toEqual(expected);
  });

  it('should return correctly sorted array.', () => {
    const searchResults = [
      {
        score: 0.102,
        show: {},
      },
      {
        score: 0.103,
        show: {},
      },
      {
        score: 0.101,
        show: {},
      },
      {
        score: 0.104,
        show: {},
      },
      {
        score: 0.103,
        show: {},
      },
    ] as SearchResult[];

    const actual = sortSearchResultByScore(searchResults);

    const expected = [
      {
        score: 0.104,
        show: {},
      },
      {
        score: 0.103,
        show: {},
      },
      {
        score: 0.103,
        show: {},
      },
      {
        score: 0.102,
        show: {},
      },
      {
        score: 0.101,
        show: {},
      },
    ] as SearchResult[];
    expect(actual).toEqual(expected);
  });
});
