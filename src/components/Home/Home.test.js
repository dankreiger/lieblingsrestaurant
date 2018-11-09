import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Home from './Home';
import SimpleMap from '../SimpleMap/SimpleMap';
import { dummyNavigation, dummyFavorites } from '../../utils/dummyData';

jest.mock('../SimpleMap/helpers/gmapFunctions.js');

const setupReduxConnectedComponent = (
  favorites = [],
  navigation = { toggled: false }
) => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ favorites, navigation });
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

describe('Home', () => {
  let homeComponent;

  describe('rendering', () => {
    const mockStore = configureStore();
    homeComponent = shallow(
      <Provider store={mockStore({})}>
        <Home />
      </Provider>
    );
    test('renders as expected', () => {
      expect(homeComponent).toBeTruthy();
      expect(homeComponent.length).toBe(1);
      expect(homeComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    const homeComponent = mount(
      setupReduxConnectedComponent(dummyFavorites, dummyNavigation)
    );

    afterEach(() => {
      homeComponent.unmount();
    });
    test('renders 1 map component', () => {
      expect(homeComponent.find(SimpleMap)).toBeTruthy();
      expect(homeComponent.find(SimpleMap).length).toBe(1);
    });
  });
});
