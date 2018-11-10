import styled from 'styled-components';
import { DEFAULT_TRANSITION_DURATION } from '../../constants';
import { fixedTopButton } from '../../utils/styleVars';

export const NavigationTogglerContainer = styled.button`
  ${fixedTopButton()};

  .fa-utensils {
    transition: transform ${DEFAULT_TRANSITION_DURATION}ms
      ${DEFAULT_TRANSITION_DURATION}ms;
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
