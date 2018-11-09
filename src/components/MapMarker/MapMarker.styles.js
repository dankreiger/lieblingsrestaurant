import styled from 'styled-components';

export const MapMarkerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapMarkerToolTip = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  width: 160px;
  text-align: center;
  opacity: 0;
  transition: opacity 250ms;
  font-size: 1.2em;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial;
  border-radius: 10px;
  overflow: hidden;
  &.show {
    opacity: 1;
    button {
      pointer-events: auto;
    }
  }
  button {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    border-radius: 0 !important;
    height: 36px;
    transition: height 250ms;
    &.unfavorited {
      background-color: rgba(33, 150, 243, 0.9);
      border: none;
    }
    &.favorited {
      background-color: rgba(183, 28, 28, 0.9);
      border: none;
    }
  }
  .text-label {
    display: -webkit-box;
    max-width: 400px;
    height: 32px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1;
    position: absolute;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    top: calc(50% - 24px);
    transform: translateY(-50% + 24px);
    opacity: 1;
    transition: opacity 250ms;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 250ms, filter 250ms;
    filter: brightness(50%);
  }
  &:hover {
    img {
      transform: scale(1.02);
      filter: brightness(70%);
    }
    button {
      height: 100%;
    }
    .text-label {
      opacity: 0;
    }
  }
`;
