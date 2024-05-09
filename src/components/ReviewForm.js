import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, imageUrl, rating, comment });
    // Clear form fields after submission
    setTitle('');
    setAuthor('');
    setImageUrl('');
    setRating('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
        style={{ width: '200px', padding: '8px', marginRight: '8px',  marginBottom: '20px' }}
        placeholder="Enter a title..." />
      </label>
      <label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} 
        style={{ width: '200px', padding: '8px', marginRight: '8px',  marginBottom: '20px' }}
        placeholder="Enter an author..." />
      </label>
      <label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
        style={{ width: '200px', padding: '8px', marginRight: '8px',  marginBottom: '20px' }}
        placeholder="Enter a image URL..." />
      </label>
      <label>
        <input type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} 
        style={{ width: '200px', padding: '8px', marginRight: '8px',  marginBottom: '20px' }}
        placeholder="Rate this book 0-10..." />
      </label>
      <label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} 
        style={{ width: '200px', padding: '8px', marginRight: '8px',  marginBottom: '20px' }}
        placeholder="Write a comment about this book" />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
