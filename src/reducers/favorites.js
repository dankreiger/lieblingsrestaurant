import { ADD_FAVORITE } from '../constants';

const favorites = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.some(favorite => favorite.placeId === payload.placeId)) {
        return state;
      } else {
        return [...state, payload];
      }
    default:
      return state;
  }
};

export default favorites;
