import SearchBox from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (query === '') {
      return;
    }
    searchMovies(query)
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, [query]);

  const onSearch = query => {
    setSearchParams({ query });
    setQuery(query);
    setMovies(movies);
  };

  return (
    <>
      <SearchBox onSubmit={onSearch} value={name} />
      <MoviesList movies={movies} state={{ from: location }} />
    </>
  );
};

export default Movies;
