import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  NavigationContainer,
  FavoritesLink,
  HomeLink,
  RemoveLink
} from './Navigation.styles';
import * as actions from '../../actions';

const Navigation = ({ navigation, toggleNavigation }) => {
  const resetApp = event => {
    event.preventDefault();
    localStorage.removeItem('state');
    return (window.location.href = '/'); // find a better way
  };
  return (
    <NavigationContainer
      className={classNames({ toggled: navigation && navigation.toggled })}
    >
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <HomeLink to="/" onClick={toggleNavigation}>
            <i className="fas fa-home" />
          </HomeLink>
        </li>
        <li>
          <FavoritesLink to="/info" onClick={toggleNavigation}>
            Favorites
          </FavoritesLink>
        </li>
        <li>
          <RemoveLink to="#" onClick={event => resetApp(event)}>
            Remove All Favorites
          </RemoveLink>
        </li>
        {/* <li>
          <Link to="#">Overview</Link>
        </li>
        <li>
          <Link to="#">Events</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Services</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li> */}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigation
});

export default connect(
  mapStateToProps,
  actions
)(Navigation);
