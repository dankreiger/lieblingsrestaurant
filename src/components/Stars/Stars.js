import React, { useState } from 'react';
import { StarContainer } from './Stars.styles';

const showStars = (setRating, i) => {
  return (
    <svg
      height={25}
      width={23}
      className="star rating"
      data-rating={i}
      onClick={() => setRating(i)}
    >
      <polygon
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        style={{ fillRule: 'nonzero' }}
      />
    </svg>
  );
};

const Stars = () => {
  const [rating, setRating] = useState(1);
  return (
    <StarContainer className="stars" data-stars={rating}>
      {[1, 2, 3, 4, 5].map(i => showStars(setRating, i))}
    </StarContainer>
  );
};

export default Stars;
