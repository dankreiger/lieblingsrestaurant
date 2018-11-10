import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, number, object } from 'prop-types';
import classNames from 'classnames';
import * as actions from '../../actions';
import Lightbox from 'react-image-lightbox';
import { Offline, Online } from 'react-detect-offline';

import {
  Button,
  Badge,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardText
} from 'reactstrap';
import { getPhoto, cardinalize } from '../../utils/functions';
import { FavoritedItemContainer, FooterDiv } from './FavoritedItem.styles';
import Stars from '../Stars/Stars';
import { DEFAULT_TRANSITION_DURATION } from '../../constants';
import { favoritesTypes } from '../../reducers/types/favorites.types';

const FavoritedItem = ({
  favorite,
  favorites,
  history,
  deleteFavorite,
  itemIndex
}) => {
  const [itemIsUnmounting, setItemIsUnmounting] = useState(false);
  const [lightboxIsOpen, showLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = favorite.photos;

  const handleDeleteFavorite = (e, favorite) => {
    e.stopPropagation();
    setItemIsUnmounting(true);
    deleteFavorite(favorite);
    if (favorites.length === 1) {
      setTimeout(() => {
        history.push('/');
      }, DEFAULT_TRANSITION_DURATION);
    }
  };
  return (
    <>
      <FavoritedItemContainer
        inverse
        className={classNames('favoritedItemContainer', { itemIsUnmounting })}
        onClick={() => showLightbox(true)}
      >
        <CardImg width="100%" src={getPhoto(favorite)} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>My {cardinalize(itemIndex + 1)} Favorite</CardTitle>
          <CardText>{favorite.description}</CardText>
          <CardText>
            <Badge
              pill
              className={classNames({
                'd-none': !favorite.gmaps.rating
              })}
            >
              {' '}
              Avg. Google Rating: {favorite.gmaps.rating}
            </Badge>
          </CardText>
          <FooterDiv>
            <div className="d-flex flex-column align-items-center pl-4 pb-2">
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
      {lightboxIsOpen && (
        <>
          <Online>
            <Lightbox
              mainSrc={photos[photoIndex]}
              nextSrc={photos[(photoIndex + 1) % photos.length]}
              prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
              onCloseRequest={() => showLightbox(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % photos.length)
              }
            />
          </Online>
          <Offline>
            Content is unavailable. Please check your internet connection.
          </Offline>
        </>
      )}
    </>
  );
};

FavoritedItem.propTypes = {
  ...favoritesTypes,
  favorite: object,
  history: object,
  deleteFavorite: func,
  itemIndex: number
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(FavoritedItem);
