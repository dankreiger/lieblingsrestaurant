import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { positionGoogleMap, appendGmapScript } from './helpers/gmapFunctions';
import MapMarker from 'components/MapMarker/MapMarker';
import { MapContainer } from './SimpleMap.styles';
import { BERLIN } from 'constants/index';
import { mapOptions } from './helpers/gmapOptions';
import MapMenu from 'components/MapMenu/MapMenu';
import * as actions from 'actions';
import { favoritesTypes } from 'reducers/types/favorites.types';
import { navigationTypes } from 'reducers/types/navigation.types';

// TODO: Improve this component!!!
class SimpleMap extends Component {
  state = {
    places: [],
    currentMapInfo: null,
    mapReady: false
  };

  componentDidMount() {
    if (!window.google) {
      appendGmapScript().addEventListener('load', () => {
        this.setState({ mapReady: true });
      });
    } else {
      this.setState({ mapReady: true });
    }
    this.setState({ places: this.props.favorites });
  }

  handleMapInstance = (map, maps, places) => {
    positionGoogleMap(map, maps, places);
    this.setState({ currentMapInfo: { map, maps }, places });
  };

  removePlace = placeToRemove => {
    const { places } = this.state;
    const { map, maps } = this.state.currentMapInfo;
    const newPlaces = places.filter(
      place => place.placeId !== placeToRemove.placeId
    );
    this.setState({ places: newPlaces }, () => {
      positionGoogleMap(map, maps, this.state.places);
    });
  };

  render() {
    const { places, currentMapInfo, mapReady } = this.state;
    const { favorites, toggleNavigation, navigation } = this.props;
    return (
      <>
        {currentMapInfo && (
          <MapMenu
            currentMapInfo={currentMapInfo}
            handleMapInstance={this.handleMapInstance}
            places={this.state.places}
            favorites={favorites}
            toggleNavigation={toggleNavigation}
          />
        )}
        <MapContainer {...navigation}>
          {mapReady && (
            <GoogleMapReact
              defaultCenter={{ lat: BERLIN.lat, lng: BERLIN.lng }}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals
              options={mapOptions}
              onGoogleApiLoaded={({ map, maps }) =>
                this.handleMapInstance(map, maps, places)
              }
            >
              {places.map(place => (
                <MapMarker
                  key={place.placeId}
                  lat={place.location.lat}
                  lng={place.location.lng}
                  place={place}
                  removePlace={this.removePlace}
                />
              ))}
            </GoogleMapReact>
          )}
        </MapContainer>
      </>
    );
  }
}

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigation
});

SimpleMap.propTypes = {
  ...favoritesTypes,
  ...navigationTypes,
  toggleNavigation: func
};

export default connect(
  mapStateToProps,
  actions
)(SimpleMap);
