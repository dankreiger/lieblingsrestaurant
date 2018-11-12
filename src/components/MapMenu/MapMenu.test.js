import React from 'react';
import { mount } from 'enzyme';
import MapMenu from './MapMenu';
import MapSearchInput from 'components/MapSearchInput/MapSearchInput';
import NavigationToggler from 'components/NavigationToggler/NavigationToggler';
import { dummyFavorites } from 'utils/dummyData';
import {
  NavigationTogglerCol,
  MapSearchInputCol,
  AddressTypeSelectCol
} from './MapMenu.styles';
import { google } from 'components/SimpleMap/helpers/__mocks__/gmapFunctions';

/* change to shallow when enzyme supports state hooks - use mount for now */
const setupMapMenuMock = favorites => mount(<MapMenu favorites={favorites} />);

describe('MapMenu', () => {
  let mapMenuComponent;
  global.window.google = google;
  /* must mock element until useRef is supported by enzyme */
  document.body.innerHTML = '<div id="invalidSelectionPopup"></div>';

  beforeEach(() => {
    mapMenuComponent = setupMapMenuMock([]);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(mapMenuComponent.length).toEqual(1);
      /* no support for React state hooks yet */
      // expect(mapMenuComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    let navigationToggleColComponent;
    let mapSearchInputColComponent;
    let addressTypeSelectColComponent;

    describe('<NavigationTogglerCol>', () => {
      test('is not rendered when favorites are not present', () => {
        expect(mapMenuComponent.find(NavigationTogglerCol).length).toBe(0);
      });

      test('is rendered with the correct style props when favorites are present', () => {
        mapMenuComponent = setupMapMenuMock(dummyFavorites);
        navigationToggleColComponent = mapMenuComponent.find(
          NavigationTogglerCol
        );

        expect(navigationToggleColComponent.length).toBe(1);
        expect(navigationToggleColComponent.props().xs).toEqual({
          order: 0,
          size: 6
        });
        expect(navigationToggleColComponent.props().sm).toBeUndefined();
        expect(navigationToggleColComponent.props().md).toBe(3);
        expect(navigationToggleColComponent.props().lg).toBe(2);
      });

      test('contains a <NavigationToggler> when favorites are present', () => {
        mapMenuComponent = setupMapMenuMock(dummyFavorites);

        navigationToggleColComponent = mapMenuComponent.find(
          NavigationTogglerCol
        );

        expect(
          navigationToggleColComponent.find(NavigationToggler).length
        ).toBe(1);
      });
    });

    describe('<MapSearchInputCol>', () => {
      test('is rendered with the correct style props when favorites are not present', () => {
        mapSearchInputColComponent = mapMenuComponent.find(MapSearchInputCol);
        expect(mapSearchInputColComponent.length).toEqual(1);
        expect(mapSearchInputColComponent.props().xs).toEqual({
          order: 2,
          size: 12
        });
        expect(mapSearchInputColComponent.props().sm).toBeUndefined();
        expect(mapSearchInputColComponent.props().md).toEqual({
          order: 1,
          size: 8
        });
        expect(mapSearchInputColComponent.props().lg).toBe(9);
      });

      test('contains a <MapSearchInput> component when favorites are not present', () => {
        mapSearchInputColComponent = mapMenuComponent.find(MapSearchInputCol);
        expect(mapSearchInputColComponent.find(MapSearchInput).length).toBe(1);
      });

      test('is rendered with the correct style props when favorites are present', () => {
        mapMenuComponent = setupMapMenuMock(dummyFavorites);

        mapSearchInputColComponent = mapMenuComponent.find(MapSearchInputCol);
        expect(mapSearchInputColComponent.length).toEqual(1);
        expect(mapSearchInputColComponent.props().xs).toEqual({
          order: 2,
          size: 12
        });
        expect(mapSearchInputColComponent.props().sm).toBeUndefined();
        expect(mapSearchInputColComponent.props().md).toEqual({
          order: 1,
          size: 6
        });
        expect(mapSearchInputColComponent.props().lg).toBe(8);
      });

      test('contains a <MapSearchInput> component when favorites are present', () => {
        mapMenuComponent = setupMapMenuMock(dummyFavorites);

        mapSearchInputColComponent = mapMenuComponent.find(MapSearchInputCol);
        expect(mapSearchInputColComponent.find(MapSearchInput).length).toBe(1);
      });
    });

    describe('<AddressTypeSelectCol>', () => {
      test('is rendered with the correct style props when favorites are not present', () => {
        addressTypeSelectColComponent = mapMenuComponent.find(
          AddressTypeSelectCol
        );
        expect(addressTypeSelectColComponent.length).toEqual(1);
        expect(addressTypeSelectColComponent.props().xs).toEqual({
          order: 1,
          size: 12
        });
        expect(addressTypeSelectColComponent.props().sm).toBeUndefined();
        expect(addressTypeSelectColComponent.props().md).toEqual({
          order: 2,
          size: 3
        });
        expect(addressTypeSelectColComponent.props().lg).toBe(3);
      });

      test('is rendered with the correct style props when favorites are present', () => {
        addressTypeSelectColComponent = mapMenuComponent.find(
          AddressTypeSelectCol
        );

        expect(addressTypeSelectColComponent.length).toEqual(1);
        expect(addressTypeSelectColComponent.props().xs).toEqual({
          order: 1,
          size: 12
        });
        expect(addressTypeSelectColComponent.props().sm).toBeUndefined();
        expect(addressTypeSelectColComponent.props().md).toEqual({
          order: 2,
          size: 3
        });
        expect(addressTypeSelectColComponent.props().lg).toBe(3);
      });
    });
  });
});
