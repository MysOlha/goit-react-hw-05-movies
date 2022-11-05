import { useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
    // console.log(evt.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      alert('Empty string');
      return;
    }
    onSubmit(query);

    setQuery('');
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <input
        className={css.inputForm}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleNameChange}
        value={query}
      />
      <button type="submit" className={css.inputBtn}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
