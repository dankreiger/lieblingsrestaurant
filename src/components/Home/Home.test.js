import React from 'react';

import Home from './Home';
import SimpleMap from 'components/SimpleMap/SimpleMap';
import { dummyNavigation, dummyFavorites } from 'utils/dummyData';
import { setupReduxConnectedComponent } from 'utils/testHelpers';

jest.mock('components/SimpleMap/helpers/gmapFunctions.js');

describe('Home', () => {
  let homeComponent;

  describe('rendering', () => {
    homeComponent = setupReduxConnectedComponent(<Home />, 'shallow');

    test('renders as expected', () => {
      expect(homeComponent.length).toBe(1);
      expect(homeComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    const homeComponent = setupReduxConnectedComponent(
      <Home />,
      'mount',
      dummyFavorites,
      dummyNavigation
    );

    afterEach(() => {
      homeComponent.unmount();
    });
    test('renders 1 map component', () => {
      expect(homeComponent.find(SimpleMap).length).toBe(1);
    });
  });
});
