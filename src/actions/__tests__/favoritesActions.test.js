import { addFavorite, addCustomFavorite, deleteFavorite } from '..';
import {
  ADD_FAVORITE,
  ADD_CUSTOM_FAVORITE,
  DELETE_FAVORITE
} from 'constants/index';
import { dummyFavorites } from 'utils/dummyData';
import { dummyCustomFavorite } from '../../utils/dummyData';

describe('favoritesActions', () => {
  describe('addFavorite', () => {
    it('has the correct type', () => {
      const action = addFavorite();
      expect(action.type).toEqual(ADD_FAVORITE);
    });

    it('has the correct payload', () => {
      const action = addFavorite(dummyCustomFavorite);
      expect(action.type).toEqual(ADD_FAVORITE);
      expect(action.payload).toEqual(dummyCustomFavorite);
    });
  });

  describe('addCustomFavorite', () => {
    it('has the correct type', () => {
      const action = addCustomFavorite();
      expect(action.type).toEqual(ADD_CUSTOM_FAVORITE);
    });

    it('has the correct payload', () => {
      const action = addCustomFavorite({
        ...dummyCustomFavorite,
        ...dummyFavorites[0]
      });
      expect(action.type).toEqual(ADD_CUSTOM_FAVORITE);
      expect(action.payload).toEqual({
        ...dummyCustomFavorite,
        ...dummyFavorites[0]
      });
    });
  });

  describe('deleteFavorite', () => {
    it('has the correct type', () => {
      const action = deleteFavorite();
      expect(action.type).toEqual(DELETE_FAVORITE);
    });

    it('has the correct payload', () => {
      const action = deleteFavorite(dummyFavorites[0]);
      expect(action.type).toEqual(DELETE_FAVORITE);
      expect(action.payload).toEqual(dummyFavorites[0]);
    });
  });
});
