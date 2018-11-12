import styled from 'styled-components';
import { FormGroup, Row } from 'reactstrap';
import {
  ACTIVE_NAV_SHADOW,
  DEFAULT_TRANSITION_DURATION,
  NAV_SHADOW
} from 'constants/index';

export const MapMenuRow = styled(Row)``;
export const AddressTypeSelectWrapper = styled(FormGroup)`
  margin-bottom: 0 !important;
  height: 100%;
  select {
    height: 100%;
    box-shadow: ${NAV_SHADOW};
    transition: box-shadow ${DEFAULT_TRANSITION_DURATION}ms
    &:focus {
      box-shadow: ${ACTIVE_NAV_SHADOW}
    }
  }
`;
