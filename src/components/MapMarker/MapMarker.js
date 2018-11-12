import React, { useState } from 'react';
import classNames from 'classnames';
import { func, object } from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import {
  CloseIcon,
  MapMarkerContainer,
  MapMarkerToolTip
} from './MapMarker.styles';

import * as actions from 'actions';
import { getPhoto } from 'utils/functions';
import { favoritesTypes } from 'reducers/types/favorites.types';
import { navigationTypes } from 'reducers/types/navigation.types';

// please remove some of these unnecessary props
const MapMarker = ({
  closeNavigation,
  favorites,
  place,
  addFavorite,
  deleteFavorite,
  navigation,
  removePlace
}) => {
  const [currentFavoriteStatus, setCurrentFavoriteStatus] = useState(
    place.customFavorite || place.favorited
  );
  const [toolTipVisible, toggleToolTipVisibility] = useState(
    place.customFavorite || false
  );

  const handleAddFavorite = e => {
    e.stopPropagation();
    addFavorite(place);
    setCurrentFavoriteStatus(true);
  };

  const handleDeleteFavorite = e => {
    e.stopPropagation();
    deleteFavorite(place);
    setCurrentFavoriteStatus(false);
    toggleToolTipVisibility(false);
    if (navigation.toggled && favorites.length === 1) {
      closeNavigation();
    }
  };
  return (
    <>
      <CloseIcon
        className={classNames({
          toolTipVisible: currentFavoriteStatus || toolTipVisible
        })}
        onClick={() => removePlace(place)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </CloseIcon>
      <MapMarkerContainer
        onClick={() => toggleToolTipVisibility(!toolTipVisible)}
      >
        <MapMarkerToolTip
          className={classNames({
            show: currentFavoriteStatus || toolTipVisible
          })}
        >
          <img src={getPhoto(place)} alt="tool tip img" />
          <div className="text-label">{place.label}</div>
          <Button
            className={classNames({
              unfavorited: !currentFavoriteStatus,
              favorited: currentFavoriteStatus
            })}
            onClick={
              currentFavoriteStatus ? handleDeleteFavorite : handleAddFavorite
            }
          >
            {currentFavoriteStatus ? (
              <FontAwesomeIcon icon={faTrash} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </Button>
        </MapMarkerToolTip>
        <img src={place.icon || place.gmaps.icon} alt={place.label} />
      </MapMarkerContainer>
    </>
  );
};

MapMarker.propTypes = {
  closeNavigation: func,
  ...favoritesTypes,
  ...navigationTypes,
  place: object,
  addFavorite: func,
  deleteFavorite: func,
  removePlace: func
};

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigation
});

export default connect(
  mapStateToProps,
  actions
)(MapMarker);
