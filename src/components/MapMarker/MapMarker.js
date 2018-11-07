import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { MapMarkerContainer, MapMarkerToolTip } from './MapMarker.styles';

import * as actions from '../../actions';
import { getPhoto } from '../../utils/functions';

// please remove some of these unnecessary props
const MapMarker = ({ place, addFavorite, deleteFavorite }) => {
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
    deleteFavorite(place);
    setCurrentFavoriteStatus(false);
    toggleToolTipVisibility(false);
  };
  return (
    <MapMarkerContainer
      onClick={() => toggleToolTipVisibility(!toolTipVisible)}
    >
      <MapMarkerToolTip className={classNames({ show: toolTipVisible })}>
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
          {currentFavoriteStatus ? 'Remove' : 'Add to favorites'}
        </Button>
      </MapMarkerToolTip>
      <img src={place.icon || place.gmaps.icon} alt={place.label} />
    </MapMarkerContainer>
  );
};

export default connect(
  null,
  actions
)(MapMarker);
