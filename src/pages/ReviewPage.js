import React, { useState, useEffect } from 'react';
import Review from '../components/Review'; // Import the Review component

const ReviewPage = ({ book }) => {
  const [reviews, setReviews] = useState([]);

  // Sample data for reviews (replace with API call to fetch reviews)
  useEffect(() => {
    // Example of reviews (replace with actual data fetching)
    const fetchReviews = async () => {
      const reviewsData = [
        {
          rating: 4.5,
          date: '2024-11-18T10:30:00Z',
          comment: 'Great book, really enjoyed the story and characters!',
        },
        {
          rating: 5,
          date: '2024-11-17T14:20:00Z',
          comment: 'An amazing read, would highly recommend!',
        },
      ];
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-4">wwww</h1>
      <h2 className="text-xl text-center text-gray-700 mb-6">www</h2>
      
      {/* Displaying reviews */}
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <Review
              key={index}
              rating={review.rating}
              date={review.date}
              comment={review.comment}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
