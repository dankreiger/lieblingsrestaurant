import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
import classNames from 'classnames';
import * as actions from '../../actions';

import { Button, Badge, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import { getPhoto } from '../../utils/functions';
import { FavoritedItemContainer, FooterDiv } from './FavoritedItem.styles';
import Stars from '../Stars/Stars';

function FavoritedItem({ favorite, favoritesCount, history, deleteFavorite }) {
  const handleDeleteFavorite = (e, favorite) => {
    e.preventDefault();
    deleteFavorite(favorite);
    if (favoritesCount === 1) {
      history.push('/');
    }
  };
  return (
    <FavoritedItemContainer inverse>
      <CardImg width="100%" src={getPhoto(favorite)} alt="Card image cap" />
      <CardImgOverlay>
        {/* <CardTitle>Card Title</CardTitle> */}
        <CardText>{favorite.description}</CardText>
        <CardText>
          <Badge
            pill
            className={classNames({
              'd-none': !favorite.gmaps.rating
            })}
          >
            {' '}
            Average Rating: {favorite.gmaps.rating}
          </Badge>
        </CardText>
        <FooterDiv>
          <div className="d-flex flex-column align-items-center">
            <span>Your rating:</span>
            <Stars favorite={favorite} />
          </div>
          <Button
            color="danger"
            onClick={e => handleDeleteFavorite(e, favorite)}
          >
            Remove
          </Button>
        </FooterDiv>
      </CardImgOverlay>
    </FavoritedItemContainer>
  );
}

FavoritedItem.propTypes = {};

const mapStateToProps = ({ favorites }) => ({
  favorites: favorites
});

export default connect(
  mapStateToProps,
  actions
)(FavoritedItem);
