import React from 'react';
import FavoriteBadge from './FavoriteBadge';
import { shallow } from 'enzyme';

describe('FavoriteBadge', () => {
  let favoriteBadgeComponent;

  beforeEach(() => {
    favoriteBadgeComponent = shallow(<FavoriteBadge />);
  });
  describe('rendering', () => {
    test('renders as expected', () => {
      expect(favoriteBadgeComponent.length).toBe(1);
      expect(favoriteBadgeComponent).toMatchSnapshot();
    });
  });
});
