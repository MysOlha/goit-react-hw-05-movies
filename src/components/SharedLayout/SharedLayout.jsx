import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <div className={css.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : undefined}`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : undefined}`
          }
        >
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<h2 style={{ marginLeft: 50 }}>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
