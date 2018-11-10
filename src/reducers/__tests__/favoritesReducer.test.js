import favoritesReducer from './../favoritesReducer';
import { ADD_FAVORITE, DELETE_FAVORITE, SET_RATING } from './../../constants';
import { dummyFavorites } from '../../utils/dummyData';

describe('favoritesReducer', () => {
  describe('actions of type ADD_FAVORITE', () => {
    let initialState = [];
    let newState;
    let action;
    let action1;

    action = {
      type: ADD_FAVORITE,
      payload: dummyFavorites[0]
    };
    action1 = {
      type: ADD_FAVORITE,
      payload: dummyFavorites[1]
    };
    it('adds a favorite to the state without mutating the state', () => {
      expect(initialState.length).toEqual(0);
      newState = favoritesReducer(initialState, action);

      expect(initialState.length).toEqual(0);
      expect(newState.length).toEqual(1);

      expect(newState[0].description).toEqual(dummyFavorites[0].description);
      expect(newState[0].label).toEqual(dummyFavorites[0].label);
      expect(newState[0].gmaps).toEqual(dummyFavorites[0].gmaps);
      expect(newState[0].placeId).toEqual(dummyFavorites[0].placeId);
    });

    it('adds another favorite to the state without mutating the state', () => {
      expect(initialState.length).toEqual(0);
      newState = favoritesReducer([dummyFavorites[0]], action1);

      expect(initialState.length).toEqual(0);
      expect(newState.length).toBe(2);
      expect(newState[1].description).toEqual(dummyFavorites[1].description);
      expect(newState[1].gmaps).toEqual(dummyFavorites[1].gmaps);
      expect(newState[1].gmaps).toEqual(dummyFavorites[1].gmaps);
      expect(newState[1].placeId).toEqual(dummyFavorites[1].placeId);
    });
  });

  describe('actions of type DELETE_FAVORITE', () => {
    let newState;
    let action;
    let action1;

    action = {
      type: DELETE_FAVORITE,
      payload: dummyFavorites[0]
    };
    action1 = {
      type: DELETE_FAVORITE,
      payload: dummyFavorites[1]
    };
    it('removes a favorite from the state without mutating the state', () => {
      expect(dummyFavorites.length).toEqual(2);
      newState = favoritesReducer(dummyFavorites, action);
      expect(dummyFavorites.length).toEqual(2);
      expect(newState.length).toEqual(1);
      expect(newState).not.toContain(dummyFavorites[0]);
    });

    it('removes another favorite to the state without mutating the state', () => {
      const initialStateExample = [action1.payload];
      expect(initialStateExample.length).toEqual(1);
      newState = favoritesReducer(initialStateExample, action1);
      expect(newState.length).toBe(0);
      expect(newState).not.toContain(action1.payload);
    });
  });

  describe('actions of type SET_RATING', () => {
    let newState;
    let action;
    let action1;

    action = {
      type: SET_RATING,
      payload: {
        favorite: dummyFavorites[0],
        rating: 5
      }
    };
    action1 = {
      type: SET_RATING,
      payload: {
        favorite: dummyFavorites[1],
        rating: 3
      }
    };
    it('updates the user rating of a favorite in the state without mutating the state', () => {
      expect(dummyFavorites[0].rating).toEqual(1);
      newState = favoritesReducer(dummyFavorites, action);
      expect(dummyFavorites[0].rating).toEqual(1);
      expect(newState[0].rating).toEqual(5);

      expect(dummyFavorites[1].rating).toEqual(1);
      newState = favoritesReducer(dummyFavorites, action1);
      expect(dummyFavorites[1].rating).toEqual(1);
      expect(newState[1].rating).toEqual(3);
    });
  });
});
