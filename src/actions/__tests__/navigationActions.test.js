import { toggleNavigation } from '..';
import { TOGGLE_NAVIGATION, CLOSE_NAVIGATION } from '../../constants';
import { closeNavigation } from '../navigationActions';

describe('navigationActions', () => {
  describe('toggleNavigation', () => {
    it('has the correct type', () => {
      const action = toggleNavigation();
      expect(action.type).toEqual(TOGGLE_NAVIGATION);
    });
  });

  describe('closeNavigation', () => {
    it('has the correct type', () => {
      const action = closeNavigation();
      expect(action.type).toEqual(CLOSE_NAVIGATION);
    });
  });
});
