import { getMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieReviews(id)
      .then(results => setReviews(results.results))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      {reviews.length ? (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li className={css.reviewsListItem} key={id}>
                <p className={css.reveiw}>
                  <b className={css.reviewAuthor}>{author}: </b>
                  {content}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3 className={css.noReviews}>
          We don't have any reveiws for this movie
        </h3>
      )}
    </>
  );
};

export default Reviews;
