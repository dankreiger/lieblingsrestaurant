import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Info from './Info';
import { dummyFavorites, dummyNavigation } from '../../utils/dummyData';
import FavoritedItem from '../FavoritedItem/FavoritedItem';
import configureStore from 'redux-mock-store';

const setupReduxConnectedComponent = (
  favorites,
  navigation = { toggled: false }
) => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ favorites, navigation });

  return (
    <Provider store={store}>
      <Info />
    </Provider>
  );
};

describe('Info', () => {
  let infoComponent;

  describe('rendering', () => {
    const mockStore = configureStore();

    beforeEach(() => {
      infoComponent = shallow(
        <Provider store={mockStore({})}>
          <Info />
        </Provider>
      );
    });
    test('renders as expected', () => {
      expect(infoComponent).toBeTruthy();
      expect(infoComponent.length).toBe(1);
      expect(infoComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    afterEach(() => {
      infoComponent.unmount();
    });

    test('should render 0 favorite items given 0 favorites from redux', () => {
      infoComponent = mount(setupReduxConnectedComponent());
      expect(infoComponent.find(FavoritedItem).length).toBe(0);
    });

    test('should render 4 favorite items given 4 favorites from redux', () => {
      infoComponent = mount(
        setupReduxConnectedComponent(dummyFavorites, dummyNavigation)
      );

      expect(dummyFavorites.length).toBe(2);
      expect(infoComponent.find(FavoritedItem).length).toBe(2);
    });
  });
});
