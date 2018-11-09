import styled from 'styled-components';
import { Container } from 'reactstrap';
import { DEFAULT_TRANSITION_DURATION } from '../../constants';

export const HomeContainer = styled(Container)`
  padding-left: 0px !important;
  transition: padding ${DEFAULT_TRANSITION_DURATION}ms;
  }
  &.toggled {
    padding-left: 250px !important;
    .fa-utensils {
      transform: rotate(90deg);
    }
  }
`;
