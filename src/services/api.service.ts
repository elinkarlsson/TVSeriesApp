import axios, {AxiosResponse} from 'axios';
import Show from '../models/Show';
import SearchResult from '../models/SearchResult';

const client = axios.create({
  baseURL: 'https://api.tvmaze.com',
});

export const SearchShow = async (
  searchTerm: string,
): Promise<AxiosResponse<SearchResult[]>> => {
  try {
    return await client.get(`/search/shows?q=${searchTerm}`, {});
  } catch (error: any) {
    throw new Error(
      error?.message ?? 'Something went wrong while searching for shows.',
    );
  }
};

export const GetShowById = async (id: number): Promise<AxiosResponse<Show>> => {
  try {
    return await client.get(`/shows/${id}`, {});
  } catch (error: any) {
    throw new Error(
      error?.message ?? 'Something went wrong while fetching the show.',
    );
  }
};
