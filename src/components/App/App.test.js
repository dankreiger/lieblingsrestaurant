import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Navigation from '../Navigation/Navigation';
import { Route } from 'react-router-dom';

describe('App', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = shallow(<App />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(appComponent).toBeTruthy();
      expect(appComponent.length).toBe(1);
      expect(appComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('renders 1 <Navigation> component', () => {
      expect(appComponent.find(Navigation)).toBeTruthy();
      expect(appComponent.find(Navigation).length).toBe(1);
      expect(appComponent.find(Route).length).toBe(2);
    });
    test('renders 2 routes', () => {
      expect(appComponent.find(Navigation)).toBeTruthy();
      expect(appComponent.find(Route).length).toBe(2);
    });
  });

  describe('routes', () => {
    test('first route has an exact path leading to the root route', () => {
      expect(
        appComponent
          .find(Route)
          .at(0)
          .props().exact
      ).toBe(true);
      expect(
        appComponent
          .find(Route)
          .at(0)
          .props().path
      ).toBe('/');
    });
    test('second route has an exact path leading to the info route', () => {
      expect(
        appComponent
          .find(Route)
          .at(1)
          .props().exact
      ).toBe(true);
      expect(
        appComponent
          .find(Route)
          .at(1)
          .props().path
      ).toBe('/info');
    });
  });
});
