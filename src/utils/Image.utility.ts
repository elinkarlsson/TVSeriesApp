import Cover from '../models/Cover';

export const getImageUriOrDefault = (image: Cover | null) =>
  image?.medium
    ? image.medium
    : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png';
