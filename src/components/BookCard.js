import React, { useState } from 'react';

const BookCard = ({ book, addToLibrary, removeFromLibrary }) => {
  const [readingStatus, setReadingStatus] = useState('To Be Read');

  const handleAddToLibrary = () => {
    addToLibrary(book);
  };

  const handleRemoveFromLibrary = () => {
    removeFromLibrary(book.id); // Pass the book ID to identify which book to remove
  };

  const handleReadingStatusChange = () => {
    switch (readingStatus) {
      case 'Currently Reading':
        setReadingStatus('To Be Read');
        break;
      case 'To Be Read':
        setReadingStatus('Finished Reading');
        break;
      case 'Finished Reading':
        setReadingStatus('Currently Reading');
        break;
      default:
        setReadingStatus('To Be Read');
    }
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Published Date: {book.publishedDate}</p>
      <button onClick={handleAddToLibrary}>Add to Library</button>
      <button onClick={handleRemoveFromLibrary}>Remove from Library</button>
      <button onClick={handleReadingStatusChange}>{readingStatus}</button>
    </div>
  );
};

export default BookCard;
