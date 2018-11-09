import styled from 'styled-components';
import { Badge, Container, Row } from 'reactstrap';

export const InfoContainer = styled(Container)`
  padding-left: 0px !important;
  transition: padding 300ms;
  &.toggled {
    padding-left: 250px !important;
    .arrow-icon {
      transform: rotate(-180deg);
    }
  }
`;

export const NavigationTogglerRow = styled(Row)`
  button {
    width: 100%;
  }
`;
export const FavoritesRow = styled(Row)`
  height: 100%;
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
        transition: transform 250ms;
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
