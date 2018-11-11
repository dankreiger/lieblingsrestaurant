import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  NAVIGATION_HEIGHT,
  DEFAULT_TRANSITION_DURATION,
  NAV_SHADOW
} from '../../constants';

export const NavigationContainer = styled.div`
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  transition: width ${DEFAULT_TRANSITION_DURATION}ms ease,
    box-shadow ${DEFAULT_TRANSITION_DURATION}ms ease
      ${DEFAULT_TRANSITION_DURATION}ms;
  &.toggled {
    width: 250px;
    box-shadow: ${NAV_SHADOW};
  }

  #page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
  }

  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100vh;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 2.5em;
    padding-top: 75px;
    padding-bottom: 75px;
    li {
      a {
        display: block;
        text-decoration: none;
        color: #ffffff;
        transition: opacity ${DEFAULT_TRANSITION_DURATION}ms,
          transform ${DEFAULT_TRANSITION_DURATION};
        opacity: 1;
        &:hover {
          text-decoration: none;
          opacity: 0.9;
          transform: scale(1.02);
          /* background: rgba(255, 255, 255, 0.2); */
        }
        &:active,
        &:focus {
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 0;
    &.toggled {
      width: 250px;
    }
  }
`;

export const HomeLink = styled(Link)`
  display: flex !important;
  font-size: 1.5em;
  align-items: center;
  height: ${NAVIGATION_HEIGHT}px;
`;

export const FavoritesLink = styled(Link)`
  font-size: 1.25em;
`;

export const RemoveLink = styled(Link)`
  color: #ff4136 !important;
  opacity: 1;
  transition: opacity ${DEFAULT_TRANSITION_DURATION};
  &:hover {
    opacity: 0.9;
  }
`;
