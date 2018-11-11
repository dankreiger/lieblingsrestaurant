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
      mapSearchInputComponent = mount(<MapSearchInput />);
      expect(mapSearchInputComponent.length).toBe(1);
      /* snapshots do not support React state hooks yet */
      // expect(mapSearchInputComponent).toMatchSnapshot();
    });
  });
});
