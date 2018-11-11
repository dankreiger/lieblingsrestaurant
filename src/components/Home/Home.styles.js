import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import { DEFAULT_TRANSITION_DURATION } from 'constants/index';

export const HomeContainer = styled(Container)`
  /* override bs container */
  padding-left: 0px !important;
  padding-right: 0px !important;
  transition: padding ${DEFAULT_TRANSITION_DURATION}ms;
  }
  &.toggled {
    padding-left: 250px !important;
    .fa-utensils {
      transform: rotate(90deg);
    }
  }
`;

export const OfflineMessageRow = styled(Row)`
  display: flex;
  font-size: 1.5em;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
