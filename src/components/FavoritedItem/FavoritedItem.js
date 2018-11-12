import React, { useState } from 'react';
import { connect } from 'react-redux';
import { func, number, object } from 'prop-types';
import classNames from 'classnames';
import * as actions from 'actions';
import Lightbox from 'react-image-lightbox';
import { Offline, Online } from 'react-detect-offline';
import { getPhoto, cardinalize } from 'utils/functions';
import { FavoritedItemContainer, FooterDiv } from './FavoritedItem.styles';
import Stars from 'components/Stars/Stars';
import { DEFAULT_TRANSITION_DURATION } from 'constants/index';
import { favoritesTypes } from 'reducers/types/favorites.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import {
  Button,
  Badge,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardText
} from 'reactstrap';
import FavoriteBadge from 'components/FavoriteBadge/FavoriteBadge';
// import FavoritedItemNotes from '../FavoritedItemNotes/FavoritedItemNotes';

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
  // const [notesVisible, setNotesVisibility] = useState(false);
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

  const handleItemClick = () => {
    if (!favorite.customFavorite) {
      showLightbox(true);
    } else {
      alert('sorry this is not available for custom addresses');
    }
  };

  // const toggleNotes = e => {
  //   e.stopPropagation();
  //   setNotesVisibility(!notesVisible);
  // }

  // REFACTOR CUSTOM FAVORITE LOGIC
  return (
    <>
      <FavoritedItemContainer
        inverse
        className={classNames('favoritedItemContainer', { itemIsUnmounting })}
        onClick={handleItemClick}
      >
        {!favorite.customFavorite ? (
          <CardImg width="100%" src={getPhoto(favorite)} alt="Card image cap" />
        ) : (
          <div className="tempblackbg" />
        )}
        <CardImgOverlay>
          <FavoriteBadge favoriteRanking={cardinalize(itemIndex + 1)} />
          <CardTitle className="text-center">
            {favorite.customFavorite
              ? favorite.restaurantName
              : favorite.gmaps.name || favorite.description}
          </CardTitle>
          <CardText>
            {favorite.customFavorite
              ? favorite.restaurantStreetAddress
              : favorite.gmaps.formatted_address}
          </CardText>
          {favorite.customFavorite && (
            <CardText>
              {favorite.plz} {favorite.city} {favorite.region}
            </CardText>
          )}
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
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            {/* <Button
              color="danger"
              onClick={toggleNotes}
            >
              {notesVisible ? 'Hide Notes' : 'Show Notes'}
            </Button>             */}
          </FooterDiv>
        </CardImgOverlay>
      </FavoritedItemContainer>
      {/* {notesVisible && (
        <FavoritedItemNotes/>
      )} */}
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
