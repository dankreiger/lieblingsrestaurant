import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  favorites: favoritesReducer,
  navigation: navigationReducer
});
