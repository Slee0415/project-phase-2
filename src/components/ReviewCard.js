import React from 'react';

const ReviewCard = ({ review, onDelete }) => {
  return (
    <div className="book-card"> {/* Use the same class as BookCard */}
      <img src={review.imageUrl} alt={review.title} />
      <h3>{review.title}</h3>
      <p>Author: {review.author}</p>
      <p>Rating: {review.rating}</p>
      <p>{review.comment}</p>
      <button onClick={() => onDelete(review.id)}>Delete</button>
    </div>
  );
};

export default ReviewCard;
