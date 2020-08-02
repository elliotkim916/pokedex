import React, { useState } from 'react';
import { getPokemon } from '../api';

const SearchForm = (props) => {
  const [formInput, setFormInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setFormInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(formInput);
    props.history.push(`/searchResult/${formInput}`);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formInput}
          onChange={handleChange}
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};

export default SearchForm;
