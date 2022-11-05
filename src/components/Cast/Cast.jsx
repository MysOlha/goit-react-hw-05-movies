import { getMovieActors, IMG_URL, defaultActor } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieActors(id)
      .then(results => setCasts(results.cast))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      {casts && (
        <ul className={css.castList}>
          {casts.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={css.castListItem}>
                <img
                  width={300}
                  height={450}
                  src={
                    profile_path === null
                      ? `${defaultActor}`
                      : `${IMG_URL}${profile_path}`
                  }
                  alt={name}
                />
                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
