import styled from 'styled-components';
import { Badge, Container, Row } from 'reactstrap';

const navHeight = 56;

export const InfoContainer = styled(Container)`
  height: calc(100vh - ${navHeight}px);
`;

export const FavoritesRow = styled(Row)`
  height: 100%;
  align-items: center;
  .info-content-wrapper {
    display: flex;
    max-height: 90px;
    img {
      width: 20%;
      object-fit: cover;
    }
  }
`;

export const AvgRating = styled(Badge)`
  display: block;
`;
