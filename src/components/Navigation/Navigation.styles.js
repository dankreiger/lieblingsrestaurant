import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export const InfoLinkButton = styled(Button)`
  display: none !important;
  padding: 0 !important;
  &.show {
    display: inline-block !important;
  }
`;
export const InfoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.375rem 0.75rem !important;
  display: inline-block;
  &:hover,
  &:active,
  &:link,
  &:focus,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`;
