import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.header}>
        <Link to="/" className={css.headerLink}>
          Home
        </Link>
        <Link to="/movies" className={css.headerLink}>
          Movies
        </Link>
      </div>
      <Outlet />
    </>
  );
};
