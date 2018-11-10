/*global google */

import React, { useRef, useState } from 'react';
import { array, func, object, shape } from 'prop-types';
import { BERLIN } from '../../constants/';
import { SearchInput, StyledPopover } from './MapSearchInput.styles';
import { PopoverBody } from 'reactstrap';
import idx from 'idx';

const MapSearchInput = ({ currentMapInfo, handleMapInstance, places }) => {
  const [validSelection, setSelectionValidity] = useState(true);
  const [showSuggestions, setSuggestionsVisibility] = useState(false);
  const inputContainer = useRef(null);

  const handleFocus = () => {
    setSuggestionsVisibility(false);
    inputContainer.current.clear();
    if (!validSelection) {
      setSelectionValidity(true);
    }
    // prevent suggestions dropdown from opening abruptly and unnecessarily
    // send a PR to Geosuggest
    setTimeout(() => {
      setSuggestionsVisibility(true);
    }, 1000);
  };

  const handleSuggestSelect = newPlace => {
    if (!newPlace) {
      return;
    }
    const { map, maps } = currentMapInfo;

    if (idx(newPlace, _ => _.gmaps.types.length)) {
      const isRestaurant = newPlace.gmaps.types.includes('restaurant');
      setSelectionValidity(isRestaurant);
      if (!isRestaurant) {
        return;
      } else {
        if (!places.some(place => place.placeId === newPlace.placeId)) {
          handleMapInstance(map, maps, [...places, newPlace]);
        }
      }
    }
  };
  return (
    <>
      <SearchInput
        ref={inputContainer}
        onFocus={handleFocus}
        placeholder="Search for a restaurant..."
        onSuggestSelect={handleSuggestSelect}
        location={new google.maps.LatLng(BERLIN.lat, BERLIN.lng)}
        radius={2000}
        types={['establishment']}
        validSelection={validSelection}
        showSuggestions={showSuggestions}
        id="invalidSelectionPopup"
      />
      <StyledPopover
        placement="bottom"
        isOpen={!validSelection}
        target="invalidSelectionPopup"
      >
        <PopoverBody>
          Sorry this is not a restaurant. Please try your search again.
        </PopoverBody>
      </StyledPopover>
    </>
  );
};

MapSearchInput.propTypes = {
  places: array,
  currentMapInfo: shape({
    map: object,
    maps: object
  }),
  handleMapInstance: func
};

export default MapSearchInput;
