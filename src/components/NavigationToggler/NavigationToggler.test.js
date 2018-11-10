import React from 'react';
import { setupReduxConnectedComponent } from '../../utils/testHelpers';
import NavigationToggler from './NavigationToggler';

describe('NavigationToggler', () => {
  let navigationTogglerComponent;

  describe('rendering', () => {
    navigationTogglerComponent = setupReduxConnectedComponent(
      <NavigationToggler />,
      'shallow'
    );

    test('renders as expected', () => {
      expect(navigationTogglerComponent).toBeTruthy();
      expect(navigationTogglerComponent.length).toBe(1);
      expect(navigationTogglerComponent).toMatchSnapshot();
    });
  });
});
