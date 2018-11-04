import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import Root from '../../Root';

describe('Home', () => {
  let homeComponent;

  beforeEach(() => {
    homeComponent = shallow(
      <Root>
        <Home />
      </Root>
    );
  });
  describe('rendering', () => {
    test('renders as expected', () => {
      expect(homeComponent).toBeTruthy();
      expect(homeComponent.length).toBe(1);
      expect(homeComponent).toMatchSnapshot();
    });
  });
});
