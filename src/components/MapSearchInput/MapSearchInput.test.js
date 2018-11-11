import React from 'react';
import MapSearchInput from './MapSearchInput';
import { mount } from 'enzyme';
import { google } from 'components/SimpleMap/helpers/__mocks__/gmapFunctions';

describe('MapSearchInput', () => {
  let mapSearchInputComponent;
  global.window.google = google;
  // must use mount and not snapshot until enzyme is supported with hooks
  // must mock element until useRef is supported by enzyme
  document.body.innerHTML = '<div id="invalidSelectionPopup"></div>';

  describe('rendering', () => {
    test('renders as expected', () => {
      mapSearchInputComponent = mount(<MapSearchInput />);
      expect(mapSearchInputComponent.length).toBe(1);
      // expect(mapSearchInputComponent).toMatchSnapshot();
    });
  });
});
