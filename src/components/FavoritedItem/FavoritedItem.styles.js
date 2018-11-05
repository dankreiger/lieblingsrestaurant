import styled from 'styled-components';
import { Card } from 'reactstrap';

export const FavoritedItemContainer = styled(Card)`
  overflow: hidden;
  padding-bottom: 50%;
  .card-text {
    margin-bottom: 0;
  }
  &:hover {
    img {
      transform: scale(1.02);
    }
  }
  img {
    transition: transform 250ms;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  }
  .card-img-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  justify-content: space-between;
  width: 100%;
  transform: translateX(-50%);
`;
