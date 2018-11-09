import { toggleNavigation } from '..';
import { TOGGLE_NAVIGATION } from '../../constants';

describe('toggleNavigation', () => {
  it('has the correct type', () => {
    const action = toggleNavigation();
    expect(action.type).toEqual(TOGGLE_NAVIGATION);
  });
});
