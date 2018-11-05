import styled from 'styled-components';
import { Card } from 'reactstrap';

export const FavoritedItemContainer = styled(Card)`
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 100%;
  .card-text {
    margin-bottom: 0;
    font-size: 1.2em;
    text-align: center;
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
    height: 100%;
  }
  .card-img-overlay {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
