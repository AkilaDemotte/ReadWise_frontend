import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const Review = ({ rating, date, comment }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        {/* Star Rating */}
        <StarRating rating={rating} /> {/* Using StarRating component */}
        <span className="ml-4 text-sm text-gray-500">{formattedDate}</span>
      </div>
      {/* Comment */}
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default Review;
