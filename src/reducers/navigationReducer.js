import { TOGGLE_NAVIGATION, CLOSE_NAVIGATION } from 'constants/index';

const initialState = {
  toggled: false
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return { ...state, toggled: !state.toggled };
    case CLOSE_NAVIGATION:
      return { ...state, toggled: false };
    default:
      return state;
  }
};

export default navigationReducer;
