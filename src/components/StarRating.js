import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center">
            {Array(fullStars)
                .fill(0)
                .map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 text-lg" />
                ))}
            {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 text-lg" />}
            {Array(emptyStars)
                .fill(0)
                .map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-gray-300 text-lg" />
                ))}
        </div>
    );
};
export default StarRating;

// Usage
{/* <StarRating rating={4.5} /> */}
