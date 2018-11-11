import React, { useState } from 'react';
import { array, func, object } from 'prop-types';
import { Row } from 'reactstrap';
import MapSearchInput from 'components/MapSearchInput/MapSearchInput';
import NavigationToggler from 'components/NavigationToggler/NavigationToggler';
import AddressTypeSelect from 'components/AddressTypeSelect/AddressTypeSelect';
import {
  NavigationTogglerCol,
  MapSearchInputCol,
  AddressTypeSelectCol
} from './MapMenu.styles';

const MapMenu = ({
  currentMapInfo,
  favorites,
  toggleNavigation,
  handleMapInstance,
  places
}) => {
  const favoritesPresent = favorites && favorites.length > 0;

  const [mapSearchFilterType, updateSearchFilterType] = useState([
    'establishment'
  ]); // establishment type  as default;
  return (
    <Row noGutters>
      {favoritesPresent && (
        <NavigationTogglerCol xs={{ size: 6, order: 0 }} md={3} lg={2}>
          <NavigationToggler
            favorites={favorites}
            toggleNavigation={toggleNavigation}
          />
        </NavigationTogglerCol>
      )}
      <MapSearchInputCol
        xs={{ size: 12, order: 2 }}
        md={{ size: favoritesPresent ? 6 : 8, order: 1 }}
        lg={favoritesPresent ? 8 : 9}
      >
        <MapSearchInput
          handleMapInstance={handleMapInstance}
          places={places}
          mapSearchFilterType={mapSearchFilterType}
          currentMapInfo={currentMapInfo}
        />
      </MapSearchInputCol>
      <AddressTypeSelectCol
        xs={{ size: favoritesPresent ? 6 : 12, order: 1 }}
        md={{ size: 3, order: 2 }}
        lg={favoritesPresent ? 2 : 3}
      >
        <AddressTypeSelect updateSearchFilterType={updateSearchFilterType} />
      </AddressTypeSelectCol>
    </Row>
  );
};

MapMenu.propTypes = {
  currentMapInfo: object,
  handleMapInstance: func,
  places: array
};

export default MapMenu;
