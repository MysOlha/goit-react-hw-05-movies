import { fetchPopularFilms } from 'services/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularFilms()
      .then(results => setMovies(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: 50 }}>Trending Today:</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
