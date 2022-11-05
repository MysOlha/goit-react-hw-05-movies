import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import MovieDetails from '../pages/MovieDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
