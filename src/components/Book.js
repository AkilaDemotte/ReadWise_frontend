import React, { useState } from "react";

const Book = (props) => {
  const { title, author, img } = props;

  // State for popup visibility and review details
  const [showPopup, setShowPopup] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [comment, setComment] = useState("");

  // Handler to toggle popup
  const togglePopup = () => setShowPopup(!showPopup);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ starRating, comment });
    // Add logic to send the review data to the backend or store it
    setShowPopup(false); // Close popup after submission
  };

  return (
    <article className="bg-white rounded-lg p-8 text-center border-2 relative">
      <img src={img} alt={author} className="w-full object-cover rounded-lg" />
      <h2 className="mt-4 text-lg">{title}</h2>
      <h4 className="mt-2 text-sm text-gray-700">{author}</h4>
      
      <button
        className="bg-blue-500 text-white px-1 py-0 rounded-lg hover:bg-blue-600 transition-colors duration-300 absolute bottom-2 left-2"
        onClick={togglePopup}
      >
        Add Review
      </button>
      <button
        className="bg-green-500 text-white px-1 py-0 rounded-lg hover:bg-green-600 transition-colors duration-300 absolute bottom-2 right-2 mt-2"
        // onClick={() => (window.location.href = `/reviews/${id}`)} // Adjust the URL as needed
      >
        Show Reviews
      </button>
      

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Add Your Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="mb-2">Star Rating:</p>
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`cursor-pointer text-2xl ${
                        star <= (hoverRating || starRating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => setStarRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <label className="block mb-4">
                Comment:
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment here..."
                ></textarea>
              </label>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};

export default Book;
