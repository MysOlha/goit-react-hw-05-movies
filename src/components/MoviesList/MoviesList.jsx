import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';
const MoviesList = ({ movies, state }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title }) => {
        return (
          <li className={css.moviesItem} key={id}>
            <Link to={`/movies/${id}`} state={state}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
