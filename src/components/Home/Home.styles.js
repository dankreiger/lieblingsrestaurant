import styled from 'styled-components';
import { Container } from 'reactstrap';

export const HomeContainer = styled(Container)`
  padding-left: 0px !important;
  transition: padding 300ms;
  }
  &.toggled {
    padding-left: 250px !important;
    .arrow-icon {
      transform: rotate(180deg);
    }
  }
`;
