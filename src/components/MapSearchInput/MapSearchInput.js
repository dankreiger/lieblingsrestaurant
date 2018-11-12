/*global google */

import React, { useRef, useState } from 'react';
import { array, func, object, oneOfType, shape, string } from 'prop-types';
import { BERLIN } from 'constants/index';
import { SearchInput, StyledPopover } from './MapSearchInput.styles';
import { PopoverBody } from 'reactstrap';
import idx from 'idx';
import NewAddressModal from '../NewAddressModal/NewAddressModal';

const MapSearchInput = ({
  currentMapInfo,
  handleMapInstance,
  mapSearchFilterType,
  places
}) => {
  const [showSuggestions, setSuggestionsVisibility] = useState(false);
  const [isRestaurant, setIsRestaurantStatus] = useState(true);
  const [lastFavoritedItemExists, setExistenceOfLastFavoritedItem] = useState(
    false
  );
  const [modalVisible, setModalVisbility] = useState(false);
  const [modalStepIndex, setModalStepIndex] = useState(0);
  const [customPlace, setCustomPlace] = useState(null);
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

  const closeModal = () => {
    setModalVisbility(false);
  };

  const goToNextModalStep = () => {
    setModalStepIndex(modalStepIndex + 1);
  };

  const handleSuggestSelect = newPlace => {
    if (!newPlace) {
      return;
    }
    const { map, maps } = currentMapInfo;

    if (idx(newPlace, _ => _.gmaps.types.length)) {
      const newPlaceIsRestaurant = newPlace.gmaps.types.includes('restaurant');

      if (places.some(place => place.placeId === newPlace.placeId)) {
        setExistenceOfLastFavoritedItem(true);
      } else if (!newPlaceIsRestaurant) {
        setExistenceOfLastFavoritedItem(false);
        setModalVisbility(true);
        setCustomPlace(newPlace);
      } else {
        setIsRestaurantStatus(newPlaceIsRestaurant);
        setExistenceOfLastFavoritedItem(false);
        handleMapInstance(map, maps, [...places, newPlace]);
      }
    }
  };
  return (
    <>
      <SearchInput
        ref={inputContainer}
        onFocus={handleFocus}
        placeholder={
          mapSearchFilterType.length
            ? 'Search for a restaurant...'
            : 'Search for an address...'
        }
        onSuggestSelect={handleSuggestSelect}
        location={new google.maps.LatLng(BERLIN.lat, BERLIN.lng)}
        radius={2000}
        types={mapSearchFilterType}
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
      {modalVisible && (
        <NewAddressModal
          customPlace={customPlace}
          handleMapInstance={handleMapInstance}
          currentMapInfo={currentMapInfo}
          modalStepIndex={modalStepIndex}
          goToNextModalStep={goToNextModalStep}
          places={places}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

MapSearchInput.propTypes = {
  places: array,
  currentMapInfo: shape({
    map: object,
    maps: object
  }),
  handleMapInstance: func,
  mapSearchFilterType: oneOfType([array, string])
};

export default MapSearchInput;
