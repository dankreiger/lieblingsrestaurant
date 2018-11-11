import React from 'react';
import { array, func, object } from 'prop-types';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import MapSearchInput from 'components/MapSearchInput/MapSearchInput';

const MapMenu = ({ currentMapInfo, handleMapInstance, places }) => {
  return (
    <>
      <Row noGutters>
        <Col>
          <MapSearchInput
            handleMapInstance={handleMapInstance}
            places={places}
            currentMapInfo={currentMapInfo}
          />
        </Col>
        <Col>
          <FormGroup>
            <Input
              type="select"
              name="addressTypeFilter"
              id="addressTypeFilter"
            >
              <option>Establishments</option>
              <option>All Addresses</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

MapMenu.propTypes = {
  currentMapInfo: object,
  handleMapInstance: func,
  places: array
};

export default MapMenu;
