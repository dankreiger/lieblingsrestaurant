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
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: opacity 250ms;
  font-size: 1.2em;
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial;
  button {
    pointer-events: none;
  }
  &.show {
    opacity: 1;
    button {
      pointer-events: auto;
    }
  }
  .text {
    height: 1.2em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 10px 0;
  }
  img {
    width: 100%;
    border-radius: 100%;
  }
`;
