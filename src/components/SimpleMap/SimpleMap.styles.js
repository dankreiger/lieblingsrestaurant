import styled from 'styled-components';

import {
  NAVIGATION_HEIGHT,
  DEFAULT_TRANSITION_DURATION
} from '../../constants';

export const MapContainer = styled.div`
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  width: 100vw;
  position: fixed;
  top: ${NAVIGATION_HEIGHT}px;
  z-index: -1;
  left: 0;
  transition: padding ${DEFAULT_TRANSITION_DURATION}ms;
  padding-left: ${props => (props.toggled ? '250px' : '0px')};
`;
