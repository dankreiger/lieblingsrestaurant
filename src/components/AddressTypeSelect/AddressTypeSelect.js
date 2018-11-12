import React from 'react';
import { func } from 'prop-types';
import { Input } from 'reactstrap';
import { AddressTypeSelectWrapper } from './AddressTypeSelect.styles';

const AddressTypeSelect = ({ handleUpdateFilter }) => {
  return (
    <AddressTypeSelectWrapper>
      <Input
        type="select"
        name="addressTypeFilter"
        id="addressTypeFilter"
        onChange={e => handleUpdateFilter(e.target.value)}
      >
        <option value="establishment">Establishments</option>
        <option value="">All Addresses</option>
      </Input>
    </AddressTypeSelectWrapper>
  );
};

AddressTypeSelect.propTypes = {
  handleUpdateFilter: func
};

export default AddressTypeSelect;
