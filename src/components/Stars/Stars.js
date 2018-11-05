import React, { useEffect, useState } from 'react';
import { StarContainer } from './Stars.styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const showStars = (clickRating, i) => {
  return (
    <svg
      key={i}
      height={25}
      width={23}
      className="star rating"
      data-rating={i}
      onClick={() => clickRating(i)}
    >
      <polygon
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        style={{ fillRule: 'nonzero' }}
      />
    </svg>
  );
};

const Stars = ({ favorite, setRating }) => {
  const [rating, clickRating] = useState(favorite.rating || 1);
  useEffect(() => {
    setRating(favorite, rating);
  });
  return (
    <StarContainer className="stars" data-stars={rating}>
      {[1, 2, 3, 4, 5].map(i => showStars(clickRating, i))}
    </StarContainer>
  );
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(Stars);
