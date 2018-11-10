import styled from 'styled-components';
import {
  DEFAULT_TRANSITION_DURATION,
  DANGER_COLOR,
  PRIMARY_COLOR,
  OVERLAY_BG_COLOR,
  ACTIVE_MARKER_SHADOW,
  MARKER_SHADOW
} from '../../constants';

export const CloseIcon = styled.div`
  font-size: 2em;
  cursor: pointer;
  width: 38px;
  position: absolute;
  background: ${DANGER_COLOR};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: ${MARKER_SHADOW};
  top: -40px;
  right: -65px;
  &:active {
    box-shadow: ${ACTIVE_MARKER_SHADOW};
  }
  &.toolTipVisible {
    display: none;
  }
  i {
    padding: 8px;
  }
`;

export const MapMarkerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapMarkerToolTip = styled.div`
  background: ${OVERLAY_BG_COLOR};
  color: #fff;
  box-shadow: ${MARKER_SHADOW};
  position: absolute;
  width: 80px;
  height: 80px;
  text-align: center;
  opacity: 0;
  font-size: 1.2em;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial;
  border-radius: 100%;
  overflow: hidden;
  transition: opacity ${DEFAULT_TRANSITION_DURATION}ms,
    box-shadow ${DEFAULT_TRANSITION_DURATION}ms,
    width ${DEFAULT_TRANSITION_DURATION}ms,
    height ${DEFAULT_TRANSITION_DURATION}ms;
  &:active {
    box-shadow: ${ACTIVE_MARKER_SHADOW};
  }
  &.show {
    opacity: 1;
    width: 130px;
    height: 130px;
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
    padding-bottom: 15px;
    transition: all ${DEFAULT_TRANSITION_DURATION}ms;
    &.unfavorited {
      background-color: ${PRIMARY_COLOR};
      border: none;
    }
    &.favorited {
      background-color: ${DANGER_COLOR};
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
    transform: translateY(calc(-50% + 24px));
    opacity: 1;
    transition: opacity ${DEFAULT_TRANSITION_DURATION}ms;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform ${DEFAULT_TRANSITION_DURATION}ms,
      filter ${DEFAULT_TRANSITION_DURATION}ms;
    filter: brightness(50%);
  }
  &:hover {
    img {
      transform: scale(1.02);
      filter: brightness(70%);
    }
    button {
      height: 100%;
      font-size: 2em;
      padding-bottom: 0px;
    }
    .text-label {
      opacity: 0;
    }
  }
`;
