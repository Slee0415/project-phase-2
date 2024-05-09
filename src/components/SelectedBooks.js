import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const SelectedBooks = ({ selectedBooks, addToLibrary, removeFromLibrary }) => {
  return (
    <div className="selected-books">
      {selectedBooks.map((book, index) => (
        <BookCard
          key={index}
          book={book}
          addToLibrary={addToLibrary}
          removeFromLibrary={removeFromLibrary} // Pass removeFromLibrary function
        />
      ))}
    </div>
  );
};

SelectedBooks.propTypes = {
  selectedBooks: PropTypes.array.isRequired,
  addToLibrary: PropTypes.func.isRequired,
  removeFromLibrary: PropTypes.func.isRequired, // Make sure removeFromLibrary is declared as a prop
};

export default SelectedBooks;
