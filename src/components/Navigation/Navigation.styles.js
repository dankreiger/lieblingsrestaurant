import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  NAVIGATION_HEIGHT,
  DEFAULT_TRANSITION_DURATION
} from '../../constants';

export const NavigationContainer = styled.div`
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #000;
  transition: all ${DEFAULT_TRANSITION_DURATION}ms ease;
  &.toggled {
    width: 250px;
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
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      text-indent: 20px;
      line-height: 40px;
      a {
        display: block;
        text-decoration: none;
        color: #999999;
        &:hover {
          text-decoration: none;
          color: #fff;
          background: rgba(255, 255, 255, 0.2);
        }
        &:active,
        &:focus {
          text-decoration: none;
        }
      }
    }
    > .sidebar-brand {
      height: 65px;
      font-size: 18px;
      line-height: 60px;
      a {
        color: #999999;
        &:hover {
          color: #fff;
          background: none;
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
  color: #b00020 !important;
  margin-top: 70px;
`;
