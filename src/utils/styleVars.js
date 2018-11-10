import { NAVIGATION_HEIGHT } from '../constants';

export const fixedTopButton = () =>
  `
  background: #f57c00;
  font-size: 2em;
  display: flex;
  align-items: center;
  height: ${NAVIGATION_HEIGHT}px;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus {
    outline: none;
  }

  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
`;
