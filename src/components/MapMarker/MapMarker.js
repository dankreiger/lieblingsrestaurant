import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { MapMarkerContainer, MapMarkerToolTip } from './MapMarker.styles';

import * as actions from '../../actions';

// please remove some of these unnecessary props
const MapMarker = ({
  favorite,
  text,
  icon,
  photo,
  addFavorite,
  deleteFavorite,
  favorited
}) => {
  const [currentFavoriteStatus, setCurrentFavoriteStatus] = useState(favorited);
  const [toolTipVisible, toggleToolTipVisibility] = useState(false);

  const handleAddFavorite = e => {
    e.stopPropagation();
    addFavorite(favorite);
    setCurrentFavoriteStatus(true);
  };

  const handleDeleteFavorite = e => {
    e.stopPropagation();
    deleteFavorite(favorite);
    setCurrentFavoriteStatus(false);
    toggleToolTipVisibility(false);
  };
  return (
    <MapMarkerContainer
      onClick={() => toggleToolTipVisibility(!toolTipVisible)}
    >
      <MapMarkerToolTip className={classNames({ show: toolTipVisible })}>
        <img src={photo} alt="tool tip img" />
        <div className="text">{text}</div>
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
      <img src={icon} alt={text} />
    </MapMarkerContainer>
  );
};

export default connect(
  null,
  actions
)(MapMarker);
