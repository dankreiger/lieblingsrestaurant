import styled from 'styled-components';
import { Badge, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  NAVIGATION_HEIGHT,
  DEFAULT_TRANSITION_DURATION
} from 'constants/index';
import { fixedTopButton } from 'utils/styleVars';

export const InfoContainer = styled(Container)`
  transition: padding ${DEFAULT_TRANSITION_DURATION}ms;
  .fa-utensils {
    transition: transform ${DEFAULT_TRANSITION_DURATION}ms
      ${DEFAULT_TRANSITION_DURATION}ms;
  }
  &.toggled {
    padding-left: 250px !important;
    .fa-utensils {
      transform: rotate(90deg);
    }
  }
`;

export const HomeButtonLink = styled(Link)`
  position: fixed !important;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  transition: opacity ${DEFAULT_TRANSITION_DURATION}ms;
  ${fixedTopButton()};
  &:hover,
  &:focus,
  &:active,
  &:link,
  &:visited {
    color: #fff !important;
    opacity: 0.8;
    text-decoration: none !important;
  }
`;
export const FavoritesRow = styled(Row)`
  height: 100%;
  margin-top: ${NAVIGATION_HEIGHT}px;
  align-items: center;
  .info-content-wrapper {
    display: flex;
    max-height: 90px;
    .img-wrapper {
      overflow: hidden;
      width: 20%;
      margin-right: 10px;
      display: block;
      img {
        transition: transform ${DEFAULT_TRANSITION_DURATION}ms;
        object-fit: cover;
        width: 100%;
      }
    }

    .description {
      color: #000;
    }
  }
`;

export const AvgRating = styled(Badge)`
  display: block;
`;
