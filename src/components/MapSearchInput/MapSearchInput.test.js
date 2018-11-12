import React from 'react';
import MapSearchInput from './MapSearchInput';
import { mount } from 'enzyme';
import { google } from 'components/SimpleMap/helpers/__mocks__/gmapFunctions';

describe('MapSearchInput', () => {
  let mapSearchInputComponent;
  global.window.google = google;
  /* must mock element until useRef is supported by enzyme */
  document.body.innerHTML = '<div id="invalidSelectionPopup"></div>';

  describe('rendering', () => {
    test('renders as expected', () => {
      /* change to shallow when enzyme supports state hooks - use mount for now */
      /* google only accepts an array of types, but will not accept restaurant as a type for autocomplete */
      /* for all types, nothing must be supplied, so an empty string is used here */
      mapSearchInputComponent = mount(
        <MapSearchInput mapSearchFilterType={['establishment']} />
      );
      expect(mapSearchInputComponent.length).toBe(1);
      /* snapshots do not support React state hooks yet */
      // expect(mapSearchInputComponent).toMatchSnapshot();
    });
  });
});
