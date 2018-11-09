import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';

export const history = createHistory();

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

const persistedState = loadState();
/* store favorites in local storage */
const store = createStore(rootReducer, persistedState, composedEnhancers);

store.subscribe(
  throttle(() => {
    saveState({ favorites: store.getState().favorites });
  }, 1000)
);

export default store;
