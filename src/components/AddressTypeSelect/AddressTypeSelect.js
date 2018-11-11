import React from 'react';
import { func } from 'prop-types';
import { Input } from 'reactstrap';
import { AddressTypeSelectWrapper } from './AddressTypeSelect.styles';

const AddressTypeSelect = ({ updateSearchFilterType }) => {
  return (
    <AddressTypeSelectWrapper>
      <Input
        type="select"
        name="addressTypeFilter"
        id="addressTypeFilter"
        onChange={e => updateSearchFilterType(e.target.value)}
      >
        <option value="establishments">Establishments</option>
        <option value="">All Addresses</option>
      </Input>
    </AddressTypeSelectWrapper>
  );
};

AddressTypeSelect.propTypes = {
  updateSearchFilterType: func
};

export default AddressTypeSelect;
