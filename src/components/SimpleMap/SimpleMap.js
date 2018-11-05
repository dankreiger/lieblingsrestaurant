/*global google */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { apiIsLoaded, appendGmapScript } from './helpers/gmapFunctions';

import MapMarker from '../MapMarker/MapMarker';
import { SearchInput } from './SimpleMap.styles';
import { BERLIN } from '../../constants';
import { getPhoto } from '../../utils/functions';

class SimpleMap extends Component {
  state = {
    places: [],
    currentMapInfo: null,
    mapReady: false
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
    this.setState({ currentMapInfo: { map, maps, places } });
  };

  handleSuggestSelect = newPlace => {
    if (!newPlace) {
      return;
    }
    const { map, maps, places } = this.state.currentMapInfo;

    if (!places.some(place => place.placeId === newPlace.placeId)) {
      this.setState({ places: [...places, newPlace] }, () => {
        this.handleMapInstance(map, maps, this.state.places);
      });
    }
  };

  render() {
    const { places, currentMapInfo, mapReady } = this.state;
    return (
      <>
        {currentMapInfo && (
          <SearchInput
            placeholder="Search for a restaurant..."
            onSuggestSelect={this.handleSuggestSelect}
            location={new google.maps.LatLng(BERLIN.lat, BERLIN.lng)}
            radius={2000}
            types={['establishment']}
          />
        )}
        <div style={{ height: '70vh', width: '100%' }}>
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
                  text={place.label}
                  icon={place.icon || place.gmaps.icon}
                  photo={getPhoto(place)}
                  lat={place.location.lat}
                  lng={place.location.lng}
                  favorite={place}
                  favorited={place.favorited}
                />
              ))}
            </GoogleMapReact>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  null
)(SimpleMap);
