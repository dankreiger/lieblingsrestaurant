import React from 'react';
import Info from './Info';
import { dummyFavorites, dummyNavigation } from 'utils/dummyData';
import FavoritedItem from 'components/FavoritedItem/FavoritedItem';
import { setupReduxConnectedComponentWithRouter } from 'utils/testHelpers';

describe('Info', () => {
  let infoComponent;

  describe('rendering', () => {
    beforeEach(() => {
      infoComponent = setupReduxConnectedComponentWithRouter(
        <Info />,
        'shallow'
      );
    });
    test('renders as expected', () => {
      expect(infoComponent.length).toBe(1);
      expect(infoComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    afterEach(() => {
      infoComponent.unmount();
    });

    test('should render 0 favorite items given 0 favorites from redux', () => {
      infoComponent = setupReduxConnectedComponentWithRouter(<Info />, 'mount');
      expect(infoComponent.find(FavoritedItem).length).toBe(0);
    });

    test('should render 4 favorite items given 4 favorites from redux', () => {
      infoComponent = setupReduxConnectedComponentWithRouter(
        <Info />,
        'mount',
        dummyFavorites,
        dummyNavigation
      );

      expect(dummyFavorites.length).toBe(2);
      expect(infoComponent.find(FavoritedItem).length).toBe(2);
    });
  });
});
