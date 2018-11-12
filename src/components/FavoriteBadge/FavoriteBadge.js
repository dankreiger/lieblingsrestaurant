import React from 'react';
import { string } from 'prop-types';
import { FavoriteBadgeContainer } from './FavoriteBadge.styles';

const FavoriteBadge = ({ favoriteRanking }) => {
  return (
    <FavoriteBadgeContainer>
      <svg viewBox="0 0 36 36" className="badge">
        <circle cx="50%" cy="50%" r="50%" />
        <text x="50%" y="55%" textAnchor="middle" alignmentBaseline="middle">
          {favoriteRanking}
        </text>
      </svg>
    </FavoriteBadgeContainer>
  );
};

FavoriteBadge.propTypes = {
  favoriteRanking: string
};

export default FavoriteBadge;
