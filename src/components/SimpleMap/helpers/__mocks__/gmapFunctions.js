/*** Mock Google Maps JavaScript API ***/

const googleMockFunction = jest.fn();

export const google = {
  addEventListener: googleMockFunction.bind({}),
  maps: {
    places: {
      AutocompleteService: googleMockFunction.bind({}),
      AutocompleteSessionToken: googleMockFunction.bind({}),
      PlacesService: googleMockFunction.bind({}),
      PlacesServiceStatus: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS'
      }
    },
    LatLng: googleMockFunction.bind({}),
    Geocoder: googleMockFunction.bind({}),
    GeocoderStatus: {
      ERROR: 'ERROR',
      INVALID_REQUEST: 'INVALID_REQUEST',
      OK: 'OK',
      OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
      REQUEST_DENIED: 'REQUEST_DENIED',
      UNKNOWN_ERROR: 'UNKNOWN_ERROR',
      ZERO_RESULTS: 'ZERO_RESULTS'
    }
  }
};

/* Mock appendGmapScript in Simple Map Component */
export const appendGmapScript = () => {
  global.window.google = google;
  return global.window.google;
};
