import React from 'react';
import MapMarker from './MapMarker';
import { setupReduxConnectedComponent } from 'utils/testHelpers';

describe('MapMarker', () => {
  let mapMarkerComponent;

  describe('rendering', () => {
    mapMarkerComponent = setupReduxConnectedComponent(<MapMarker />, 'shallow');

    test('renders as expected', () => {
      expect(mapMarkerComponent.length).toBe(1);
      expect(mapMarkerComponent).toMatchSnapshot();
    });
  });
});
