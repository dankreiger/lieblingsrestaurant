import navigationReducer from 'reducers/navigationReducer';
import { TOGGLE_NAVIGATION, CLOSE_NAVIGATION } from 'constants/index';
import { dummyNavigation } from 'utils/dummyData';

describe('navigationReducer', () => {
  describe('actions of type TOGGLE_NAVIGATION', () => {
    let initialState = dummyNavigation;
    let newState;
    let newState1;
    let action;

    action = {
      type: TOGGLE_NAVIGATION
    };
    it('toggles the navigation toggled state without mutating the state', () => {
      expect(initialState.toggled).toBe(false);
      newState = navigationReducer(initialState, action);

      expect(initialState.toggled).toBe(false);
      expect(newState.toggled).toBe(true);

      newState1 = navigationReducer(newState, action);
      expect(newState.toggled).toBe(true);
      expect(newState1.toggled).toBe(false);
    });
  });

  describe('actions of type CLOSE_NAVIGATION', () => {
    let newState;
    let action;

    action = {
      type: CLOSE_NAVIGATION
    };

    it('closes an open navigation without mutating the state', () => {
      let initialState = { toggled: true };

      expect(initialState.toggled).toBe(true);
      newState = navigationReducer(initialState, action);

      expect(initialState.toggled).toBe(true);
      expect(newState.toggled).toBe(false);
    });

    it('does not change the toggled state of a closed navigation and does not mutate the state', () => {
      let initialState = { toggled: false };

      expect(initialState.toggled).toBe(false);
      newState = navigationReducer(initialState, action);

      expect(initialState.toggled).toBe(false);
      expect(newState.toggled).toBe(false);
    });
  });
});
