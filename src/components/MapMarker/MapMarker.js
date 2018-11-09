import React, { useState } from 'react';
import classNames from 'classnames';
import { array, func, object } from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import {
  CloseIcon,
  MapMarkerContainer,
  MapMarkerToolTip
} from './MapMarker.styles';

import * as actions from '../../actions';
import { getPhoto } from '../../utils/functions';

// please remove some of these unnecessary props
const MapMarker = ({
  closeNavigation,
  favorites,
  place,
  addFavorite,
  deleteFavorite,
  removePlace
}) => {
  const [currentFavoriteStatus, setCurrentFavoriteStatus] = useState(
    place.favorited
  );
  const [toolTipVisible, toggleToolTipVisibility] = useState(false);

  const handleAddFavorite = e => {
    e.stopPropagation();
    addFavorite(place);
    setCurrentFavoriteStatus(true);
  };

  const handleDeleteFavorite = e => {
    e.stopPropagation();
    if (favorites.length === 1) {
      closeNavigation();
    }
    deleteFavorite(place);
    setCurrentFavoriteStatus(false);
    toggleToolTipVisibility(false);
  };
  return (
    <>
      <CloseIcon
        className={classNames({
          toolTipVisible: currentFavoriteStatus || toolTipVisible
        })}
        onClick={() => removePlace(place)}
      >
        <i className="fas fa-times" />
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
              <i className="fas fa-trash" />
            ) : (
              <i className="fas fa-plus" />
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
  favorites: array,
  place: object,
  addFavorite: func,
  deleteFavorite: func,
  removePlace: func
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(MapMarker);
