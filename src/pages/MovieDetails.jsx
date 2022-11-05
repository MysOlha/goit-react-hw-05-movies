import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById, IMG_URL, defaultActor } from 'services/api';
import css from './MovieDetails.module.css';
import { MdReply } from 'react-icons/md';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const backToList = location.state?.from ?? '/';

  // console.log(location.state);

  useEffect(() => {
    getMovieById(id)
      .then(results => setMovie(results))
      .catch(err => console.log(err));
  }, [id]);
  // console.log(movie);
  const date = () => new Date(movie.release_date).getFullYear();

  return (
    <>
      <Link to={backToList} className={css.btnGoBack}>
        <MdReply size={20} /> Go back
      </Link>
      {movie && (
        <h1 className={css.title}>
          {movie.title} ({date()})
        </h1>
      )}
      <div className={css.container}>
        {movie && (
          <img
            width={300}
            src={
              movie.poster_path === null
                ? `${defaultActor}`
                : `${IMG_URL}${movie.poster_path}`
            }
            alt={movie.original_title}
          />
        )}
        <div className={css.description}>
          {movie && (
            <p className={css.info}>
              <b>User Score:</b> {movie.vote_average.toFixed(2)}
            </p>
          )}
          {movie && (
            <p className={css.info}>
              <b>Overview:</b> {movie.overview}
            </p>
          )}
          {movie && (
            <p className={css.info}>
              <b>Genre:</b> {movie.genres.map(genre => genre.name).join(' ')}
            </p>
          )}
        </div>
      </div>
      <h2 className={css.title}>Additional information:</h2>
      <ul className={css.infoList}>
        <li className={css.infoListItem}>
          <Link to="cast">Casts</Link>
        </li>
        <li className={css.infoListItem}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
