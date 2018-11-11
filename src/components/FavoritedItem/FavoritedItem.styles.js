import styled from 'styled-components';
import { Card } from 'reactstrap';
import { DEFAULT_TRANSITION_DURATION, OVERLAY_BG_COLOR } from 'constants/index';

export const FavoritedItemContainer = styled(Card)`
  cursor: pointer;
  overflow: hidden;
  padding-bottom: 100%;
  border-radius: 0 !important;
  border: none !important;
  opacity: 1;
  transition: opacity ${DEFAULT_TRANSITION_DURATION}ms;
  &.itemIsUnmounting {
    opacity: 0;
  }
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
    transition: transform ${DEFAULT_TRANSITION_DURATION}ms;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    height: 100%;
  }
  .card-img-overlay {
    background: ${OVERLAY_BG_COLOR};
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
  button {
    border-radius: 0 !important;
  }
`;
