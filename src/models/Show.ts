import Cover from './Cover';
import Rating from './Rating';

export default interface Show {
  id: number;
  name: string;
  image: Cover | null;
  summary: string;
  premiered: string;
  ended: string;
  language: string;
  genres: string[];
  rating: Rating;
  averageRuntime: number | null;
}
