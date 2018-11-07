import { ADD_FAVORITE, DELETE_FAVORITE, SET_RATING } from '../constants';
import { getPhoto } from '../utils/functions';

const favorites = (state = [], action) => {
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
            favorited: true
          }
        ];
        return [...state, ...newState];
      }

    case DELETE_FAVORITE:
      return state.filter(favorite => favorite.placeId !== payload.placeId);
    case SET_RATING:
      return state.map((favorite, index) => {
        if (index.placeId !== payload.placeId) {
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

export default favorites;
