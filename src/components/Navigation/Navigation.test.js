import React from 'react';
import Navigation from './Navigation';
import { setupReduxConnectedComponent } from 'utils/testHelpers';

describe('Navigation', () => {
  let navigationComponent;

  describe('rendering', () => {
    navigationComponent = setupReduxConnectedComponent(
      <Navigation />,
      'shallow'
    );

    test('renders as expected', () => {
      expect(navigationComponent.length).toBe(1);
      expect(navigationComponent).toMatchSnapshot();
    });
  });
});
