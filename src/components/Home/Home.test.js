import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import Root from '../../Root';
import SimpleMap from '../SimpleMap/SimpleMap';
import { setupGoogleMock } from '../../utils/mocks';

describe('Home', () => {
  let homeComponent;

  beforeAll(() => {
    setupGoogleMock();
  });

  beforeEach(() => {
    homeComponent = shallow(<Home />);
  });
  describe('rendering', () => {
    test('renders as expected', () => {
      expect(homeComponent).toBeTruthy();
      expect(homeComponent.length).toBe(1);
      expect(homeComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('renders 1 map component', () => {
      expect(homeComponent.find(SimpleMap)).toBeTruthy();
      expect(homeComponent.find(SimpleMap).length).toBe(1);
    });
  });
});
