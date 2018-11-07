import React, { PureComponent } from 'react';
import { StarContainer } from './Stars.styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const showStars = (setRating, i) => {
  return (
    <svg
      key={i}
      height={25}
      width={23}
      className="star rating"
      data-rating={i}
      onClick={e => {
        e.stopPropagation();
        setRating(i);
      }}
    >
      <polygon
        points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        style={{ fillRule: 'nonzero' }}
      />
    </svg>
  );
};

class Stars extends PureComponent {
  componentDidMount() {
    const { favorite, setRating } = this.props;
    setRating(favorite, favorite.rating || 1);
  }

  setRating = rating => {
    this.props.setRating(this.props.favorite, rating);
  };

  render() {
    const { rating } = this.props.favorite;
    return (
      <StarContainer className="stars" data-stars={rating}>
        {[1, 2, 3, 4, 5].map(i => showStars(this.setRating, i))}
      </StarContainer>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(Stars);
