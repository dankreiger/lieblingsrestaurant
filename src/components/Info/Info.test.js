import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Info from './Info';
import { dummyFavorites } from '../../utils/dummyData';
import FavoritedItem from '../FavoritedItem/FavoritedItem';
import configureStore from 'redux-mock-store';

const setupReduxConnectedComponent = data => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ favorites: data });
  return (
    <Provider store={store}>
      <Info />
    </Provider>
  );
};

describe('Info', () => {
  let infoComponent;

  describe('rendering', () => {
    beforeEach(() => {
      infoComponent = shallow(
        <Provider store={{}}>
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
      infoComponent = mount(setupReduxConnectedComponent(dummyFavorites));

      expect(dummyFavorites.length).toBe(2);
      expect(infoComponent.find(FavoritedItem).length).toBe(2);
    });
  });
});
