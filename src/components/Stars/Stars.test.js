import React from 'react';
import { setupReduxConnectedComponent } from '../../utils/testHelpers';
import Stars from './Stars';

describe('Stars', () => {
  let starsComponent;

  describe('rendering', () => {
    starsComponent = setupReduxConnectedComponent(<Stars />, 'shallow');

    test('renders as expected', () => {
      expect(starsComponent).toBeTruthy();
      expect(starsComponent.length).toBe(1);
      expect(starsComponent).toMatchSnapshot();
    });
  });
});
