import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovies } from 'services/api';
import SearchBox from 'components/SearchBox/SearchBox';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);
    searchMovies(query)
      .then(res => setMovies(res))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [query]);

  const onSearch = query => {
    setSearchParams(query !== '' ? { query } : {});
    // setQuery(query);
    setMovies(movies);
  };

  return (
    <>
      <SearchBox onSubmit={onSearch} value={query} />
      {movies.length !== 0 && !loading && (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
      {movies.length === 0 && !loading && (
        <h3 style={{ marginLeft: 50 }}>No movies for showing...</h3>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Movies;
