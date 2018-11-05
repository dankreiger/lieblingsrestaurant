import styled from 'styled-components';
import { Badge, Row } from 'reactstrap';

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
