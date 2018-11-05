import { ADD_FAVORITE, DELETE_FAVORITE, SET_RATING } from '../constants';
import { getPhoto } from '../utils/functions';

const favorites = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.some(favorite => favorite.placeId === payload.placeId)) {
        return state;
      } else {
        const newState = Object.assign(payload, {
          photo: getPhoto(payload),
          favorited: true
        }); // I don't think this is the proper way
        return [...state, newState];
      }

    case DELETE_FAVORITE:
      return state.filter(favorite => favorite.placeId !== payload.placeId);
    case SET_RATING:
      Object.assign(payload.favorite, { rating: payload.rating }); // fix this - state mutation!!
      return state;
    default:
      return state;
  }
};

export default favorites;
