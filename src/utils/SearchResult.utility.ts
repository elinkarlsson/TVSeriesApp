import SearchResult from '../models/SearchResult';

export const sortSearchResultByScore = (
  searchResult: SearchResult[],
): SearchResult[] => searchResult.sort((a, b) => b.score - a.score);
