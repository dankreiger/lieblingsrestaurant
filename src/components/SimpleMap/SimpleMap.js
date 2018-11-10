/*global google */

import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { apiIsLoaded, appendGmapScript } from './helpers/gmapFunctions';
import { PopoverBody } from 'reactstrap';
import MapMarker from '../MapMarker/MapMarker';
import { SearchInput, MapContainer, StyledPopover } from './SimpleMap.styles';
import { BERLIN } from '../../constants';

// TODO: Improve this component!!!
class SimpleMap extends Component {
  state = {
    places: [],
    currentMapInfo: null,
    mapReady: false,
    invalidSelection: false,
    showSuggestions: false
  };

  componentDidMount() {
    if (!window.google) {
      let s = appendGmapScript();

      s.addEventListener('load', () => {
        this.setState({ mapReady: true });
      });
    } else {
      this.setState({ mapReady: true });
    }
    this.setState({ places: this.props.favorites });
  }

  handleMapInstance = (map, maps, places) => {
    apiIsLoaded(map, maps, places);
    this.setState({ currentMapInfo: { map, maps }, places });
  };

  handleSuggestSelect = newPlace => {
    if (!newPlace) {
      return;
    }

    // validate that the selection is a restaurant
    if (newPlace.gmaps && newPlace.gmaps.types && newPlace.gmaps.types.length) {
      this.setState(
        { invalidSelection: !newPlace.gmaps.types.includes('restaurant') },
        () => {
          // return if the selection isn't a restaurant
          if (this.state.invalidSelection) {
            return;
          } else {
            const { map, maps } = this.state.currentMapInfo;
            const { places } = this.state;

            if (!places.some(place => place.placeId === newPlace.placeId)) {
              this.setState({ places: [...places, newPlace] }, () => {
                this.handleMapInstance(map, maps, this.state.places);
              });
            }
          }
        }
      );
    }
  };

  removePlace = placeToRemove => {
    const { places } = this.state;
    const newPlaces = places.filter(
      place => place.placeId !== placeToRemove.placeId
    );
    this.setState({ places: newPlaces });
  };

  handleFocus = () => {
    this.setState({ showSuggestions: false });
    this._geoSuggest.clear();
    if (this.state.invalidSelection) {
      this.setState({ invalidSelection: false });
    }

    // prevent suggestions dropdown from opening abruptly and unnecessarily - send a PR
    setTimeout(() => {
      this.setState({ showSuggestions: true });
    }, 1000);
  };

  render() {
    const {
      places,
      currentMapInfo,
      invalidSelection,
      mapReady,
      showSuggestions
    } = this.state;
    return (
      <>
        {currentMapInfo && (
          <>
            <SearchInput
              ref={el => (this._geoSuggest = el)}
              onFocus={this.handleFocus}
              placeholder="Search for a restaurant..."
              onSuggestSelect={this.handleSuggestSelect}
              location={new google.maps.LatLng(BERLIN.lat, BERLIN.lng)}
              radius={2000}
              types={['establishment']}
              invalidSelection={invalidSelection}
              showSuggestions={showSuggestions}
              id="invalidSelectionPopup"
            />
            <StyledPopover
              placement="bottom"
              isOpen={invalidSelection}
              target="invalidSelectionPopup"
            >
              <PopoverBody>
                Sorry this is not a restaurant. Please try your search again.
              </PopoverBody>
            </StyledPopover>
          </>
        )}

        <MapContainer {...this.props.navigation}>
          {mapReady && (
            <GoogleMapReact
              defaultCenter={{ lat: BERLIN.lat, lng: BERLIN.lng }}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals
              options={{ disableDoubleClickZoom: true }}
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
  favorites: array,
  navigation: object
};

export default connect(
  mapStateToProps,
  null
)(SimpleMap);
