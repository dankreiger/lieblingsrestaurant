import React from 'react';
import { shallow } from 'enzyme';
import MapMenu from './MapMenu';
import MapSearchInput from 'components/MapSearchInput/MapSearchInput';
import { FormGroup, Input } from 'reactstrap';

describe('App', () => {
  let mapMenuComponent;

  beforeEach(() => {
    mapMenuComponent = shallow(<MapMenu />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(mapMenuComponent.length).toBe(1);
      expect(mapMenuComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('renders 1 <MapSearchInput> component', () => {
      expect(mapMenuComponent.find(MapSearchInput).length).toBe(1);
    });
    test('renders 1 <FormGroup> component with a <Input> select menu component', () => {
      const formGroup = mapMenuComponent.find(FormGroup);
      expect(formGroup.length).toBe(1);

      expect(formGroup.find(Input).length).toBe(1);
      expect(formGroup.find(Input).props().type).toBe('select');
      expect(formGroup.find(Input).props().name).toBe('addressTypeFilter');
    });
  });
});
