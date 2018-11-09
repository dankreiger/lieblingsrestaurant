import styled from 'styled-components';

export const NavigationTogglerContainer = styled.button`
  background: #f57c00;
  font-size: 2em;
  display: flex;
  align-items: center;
  height: 44px;
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

  .arrow-icon {
    position: absolute;
    left: 5px;
    font-size: 20px;
    transition: transform 300ms 300ms;
  }

  .favorites-counter {
    padding-left: 15px;
    font-size: 14px;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }
`;
