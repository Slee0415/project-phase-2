import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter a title or author..."
        style={{ width: '200px', padding: '8px', marginRight: '8px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
