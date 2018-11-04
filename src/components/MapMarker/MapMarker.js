import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { MapMarkerContainer, MapMarkerToolTip } from './MapMarker.styles';

import * as actions from '../../actions';

const MapMarker = ({ data, text, icon, photo, addFavorite }) => {
  const [toolTipVisible, toggleToolTipVisibility] = useState(false);

  const handleAddFavorite = e => {
    e.stopPropagation();
    addFavorite(data);
  };
  return (
    <MapMarkerContainer
      onClick={() => toggleToolTipVisibility(!toolTipVisible)}
    >
      <MapMarkerToolTip className={classNames({ show: toolTipVisible })}>
        <img src={photo} alt="tool tip img" />
        <div className="text">{text}</div>
        <Button color="primary" onClick={handleAddFavorite}>
          Add to favorites
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
