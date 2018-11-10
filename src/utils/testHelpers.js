import React from 'react';
import { Provider } from 'react-redux';
import { mount, render, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const enzymeRenderComponent = (component, store, enzymeFunction) => {
  switch (enzymeFunction) {
    case 'mount':
      return mount(<Provider store={store}>{component}</Provider>);
    case 'shallow':
      return shallow(<Provider store={store}>{component}</Provider>);
    default:
      return render(<Provider store={store}>{component}</Provider>);
  }
};

const enzymeRenderComponentWithRouter = (component, store, enzymeFunction) => {
  switch (enzymeFunction) {
    case 'mount':
      return mount(
        <Provider store={store}>
          <Router>{component}</Router>
        </Provider>
      );
    case 'shallow':
      return shallow(
        <Provider store={store}>
          <Router>{component}</Router>
        </Provider>
      );
    default:
      return render(
        <Provider store={store}>
          <Router>{component}</Router>
        </Provider>
      );
  }
};

export const setupReduxConnectedComponent = (
  component,
  enzymeFunction,
  favorites = [],
  navigation = { toggled: false }
) => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ favorites, navigation });

  return enzymeRenderComponent(component, store, enzymeFunction);
};

export const setupReduxConnectedComponentWithRouter = (
  component,
  enzymeFunction,
  favorites = [],
  navigation = { toggled: false }
) => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore({ favorites, navigation });

  return enzymeRenderComponentWithRouter(component, store, enzymeFunction);
};
