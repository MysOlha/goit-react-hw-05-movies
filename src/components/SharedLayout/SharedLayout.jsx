import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.header}>
        <NavLink to="/" className={css.headerLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.headerLink}>
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<h2 style={{ marginLeft: 50 }}>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
