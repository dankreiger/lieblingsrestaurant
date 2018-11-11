/*global google */

import React, { useRef, useState } from 'react';
import { array, func, object, shape } from 'prop-types';
import { BERLIN } from 'constants/index';
import { SearchInput, StyledPopover } from './MapSearchInput.styles';
import { PopoverBody } from 'reactstrap';
import idx from 'idx';

const MapSearchInput = ({ currentMapInfo, handleMapInstance, places }) => {
  const [showSuggestions, setSuggestionsVisibility] = useState(false);
  const [isRestaurant, setIsRestaurantStatus] = useState(true);
  const [lastFavoritedItemExists, setExistenceOfLastFavoritedItem] = useState(
    false
  );
  const inputContainer = useRef(null);

  const handleFocus = () => {
    setSuggestionsVisibility(false);
    setExistenceOfLastFavoritedItem(false);
    inputContainer.current.clear();
    if (!isRestaurant) {
      setIsRestaurantStatus(true);
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
      const newPlaceIsRestaurant = newPlace.gmaps.types.includes('restaurant');
      setIsRestaurantStatus(newPlaceIsRestaurant);
      if (!newPlaceIsRestaurant) {
        return;
      } else {
        if (!places.some(place => place.placeId === newPlace.placeId)) {
          setExistenceOfLastFavoritedItem(false);
          handleMapInstance(map, maps, [...places, newPlace]);
        } else {
          setExistenceOfLastFavoritedItem(true);
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
        errorExists={!isRestaurant || lastFavoritedItemExists}
        showSuggestions={showSuggestions}
        id="invalidSelectionPopup"
      />
      <StyledPopover
        placement="bottom"
        isOpen={!isRestaurant || lastFavoritedItemExists}
        target="invalidSelectionPopup"
      >
        <PopoverBody>
          {lastFavoritedItemExists
            ? 'You have already selected this restaurant!'
            : 'Sorry this is not a restaurant. Please try your search again.'}
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
