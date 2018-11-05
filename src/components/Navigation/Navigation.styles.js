import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoLink = styled(Link)`
  opacity: 0;
  transition: opacity 250ms;
  font-size: 1.2em;
  &.show {
    opacity: 1;
  }
  &:hover {
    opacity: 0.9;
  }
`;
