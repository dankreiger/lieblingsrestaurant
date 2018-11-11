import { CLOSE_NAVIGATION, TOGGLE_NAVIGATION } from 'constants/index';

export const toggleNavigation = () => ({
  type: TOGGLE_NAVIGATION
});

export const closeNavigation = () => ({
  type: CLOSE_NAVIGATION
});
