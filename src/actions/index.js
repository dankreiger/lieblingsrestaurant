import * as favoritesActions from './favoritesActions';
import * as navigationActions from './navigationActions';

export const {
  addFavorite,
  addCustomFavorite,
  deleteFavorite,
  setRating
} = favoritesActions;
export const { closeNavigation, toggleNavigation } = navigationActions;
