import React from 'react';
import SimpleMap from './SimpleMap';
import { setupReduxConnectedComponent } from '../../utils/testHelpers';

jest.mock('../SimpleMap/helpers/gmapFunctions.js');

describe('SimpleMap', () => {
  let simpleMapComponent;

  describe('rendering', () => {
    simpleMapComponent = setupReduxConnectedComponent(<SimpleMap />, 'shallow');

    test('renders as expected', () => {
      expect(simpleMapComponent).toBeTruthy();
      expect(simpleMapComponent.length).toBe(1);
      expect(simpleMapComponent).toMatchSnapshot();
    });
  });
});
