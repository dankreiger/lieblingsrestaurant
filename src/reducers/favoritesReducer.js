import {
  ADD_CUSTOM_FAVORITE,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_RATING
} from 'constants/index';
import { getPhoto, fetchAllPhotos } from 'utils/functions';

const favoritesReducer = (state = [], action) => {
  let newState;

  const { payload } = action;
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.some(favorite => favorite.placeId === payload.placeId)) {
        return state;
      } else {
        newState = [
          {
            ...payload,
            photo: getPhoto(payload),
            photos: fetchAllPhotos(payload),
            favorited: true
          }
        ];
        return [...state, ...newState];
      }

    case ADD_CUSTOM_FAVORITE:
      newState = [
        {
          ...payload,
          customFavorite: true,
          favorited: true
        }
      ];
      return [...state, ...newState];
    case DELETE_FAVORITE:
      return state.filter(favorite => favorite.placeId !== payload.placeId);
    case SET_RATING:
      return state.map(favorite => {
        if (favorite.placeId !== payload.favorite.placeId) {
          return favorite;
        }
        return {
          ...favorite,
          rating: payload.rating
        };
      });
    default:
      return state;
  }
};

export default favoritesReducer;
