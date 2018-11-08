import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const InfoLinkButton = styled(Button)`
  display: none !important;
  &.show {
    display: inline-block !important;
  }
`;
export const InfoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover,
  &:active,
  &:link,
  &:focus,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`;
