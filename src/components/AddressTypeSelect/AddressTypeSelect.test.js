import React from 'react';
import { shallow } from 'enzyme';
import AddressTypeSelect from './AddressTypeSelect';
import { FormGroup, Input } from 'reactstrap';
import { AddressTypeSelectWrapper } from './AddressTypeSelect.styles';

describe('AddressTypeSelect', () => {
  let addressTypeSelectComponent;

  beforeEach(() => {
    addressTypeSelectComponent = shallow(<AddressTypeSelect />);
  });

  describe('rendering', () => {
    test('renders as expected', () => {
      expect(addressTypeSelectComponent.length).toBe(1);
      expect(addressTypeSelectComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    test('renders 1 <FormGroup> component with a <Input> select menu component', () => {
      const formGroup = addressTypeSelectComponent.find(
        AddressTypeSelectWrapper
      );
      expect(formGroup.length).toBe(1);

      expect(formGroup.find(Input).length).toBe(1);
      expect(formGroup.find(Input).props().type).toBe('select');
      expect(formGroup.find(Input).props().name).toBe('addressTypeFilter');
    });
  });
});
