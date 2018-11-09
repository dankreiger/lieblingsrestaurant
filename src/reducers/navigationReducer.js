import { TOGGLE_NAVIGATION } from '../constants';

const initialState = {
  toggled: false
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return { ...state, toggled: !state.toggled };

    default:
      return state;
  }
};

export default navigationReducer;
