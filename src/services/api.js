import axios from 'axios';

const API_KEY = 'd462dbf2621bfffe74242c381d524d5d';
const baseURL = 'https://api.themoviedb.org';

export const fetchPopularFilms = async () => {
  const res = await axios.get(
    `${baseURL}/3/trending/all/day?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const searchMovies = async query => {
  const res = await axios.get(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&page=1&query=${query}`
  );
  return res.data.results;
};

export const getMovieById = async id => {
  const res = await axios.get(`${baseURL}/3/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieActors = async id => {
  const res = await axios.get(
    `${baseURL}/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return res.data;
};

export const getMovieReviews = async id => {
  const res = await axios.get(
    `${baseURL}/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res.data;
};

export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export const defaultActor =
  'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg';
