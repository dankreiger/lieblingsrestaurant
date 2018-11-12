import {
  ADD_FAVORITE,
  ADD_CUSTOM_FAVORITE,
  SET_RATING,
  DELETE_FAVORITE
} from 'constants/index';

export const addFavorite = payload => ({
  type: ADD_FAVORITE,
  payload
});

export const addCustomFavorite = payload => ({
  type: ADD_CUSTOM_FAVORITE,
  payload
});

export const deleteFavorite = payload => ({
  type: DELETE_FAVORITE,
  payload
});

export const setRating = (favorite, rating) => ({
  type: SET_RATING,
  payload: {
    favorite,
    rating
  }
});
