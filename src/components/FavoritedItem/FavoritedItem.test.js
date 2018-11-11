import React from 'react';
import FavoritedItem from './FavoritedItem';
import { setupReduxConnectedComponent } from 'utils/testHelpers';

describe('FavoritedItem', () => {
  let favoritedItemComponent;

  describe('rendering', () => {
    favoritedItemComponent = setupReduxConnectedComponent(
      <FavoritedItem />,
      'shallow'
    );

    test('renders as expected', () => {
      expect(favoritedItemComponent.length).toBe(1);
      expect(favoritedItemComponent).toMatchSnapshot();
    });
  });
});
