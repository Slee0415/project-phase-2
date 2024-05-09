import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

const ReviewsPage = ({ reviews, setReviews }) => {
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    fetch('http://localhost:3001/Reviews')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        console.error('Error fetching Reviews:', error);
      });
  };

  const addReview = (newReview) => {
    fetch('http://localhost:3001/Reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Review added:', data);
        fetchReviews();
      })
      .catch(error => {
        console.error('Error adding review:', error);
      });
  };

  const deleteReview = (reviewId) => {
    fetch(`http://localhost:3001/Reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Review deleted:', data);
        fetchReviews();
      })
      .catch(error => {
        console.error('Error deleting review:', error);
      });
  };

  return (
    <div className="reviews-page">
      <ReviewForm onSubmit={addReview} 
      style={{ width: '200px', padding: '8px', marginRight: '8px' }}/>
      <div className="review-cards">
        {reviews.map(review => (
          <ReviewCard key={review.id} review={review} onDelete={deleteReview} />
        ))}
      </div>
    </div>
  );
};

ReviewsPage.propTypes = {
  reviews: PropTypes.array.isRequired,
  setReviews: PropTypes.func.isRequired,
};

export default ReviewsPage;