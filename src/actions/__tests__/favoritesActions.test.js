import { addFavorite, deleteFavorite } from '..';
import { ADD_FAVORITE, DELETE_FAVORITE } from '../../constants';
import { dummyFavorites } from '../../utils/dummyData';

describe('addFavorite', () => {
  it('has the correct type', () => {
    const action = addFavorite();
    expect(action.type).toEqual(ADD_FAVORITE);
  });

  it('has the correct payload', () => {
    const action = addFavorite(dummyFavorites[0]);
    expect(action.type).toEqual(ADD_FAVORITE);
    expect(action.payload).toEqual(dummyFavorites[0]);
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
