import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLeaf, faTrash } from '@fortawesome/free-solid-svg-icons';

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
    localStorage.removeItem('favoriteRestaurants');
    return (window.location.href = '/'); // find a better way
  };
  return (
    <NavigationContainer
      className={classNames({ toggled: navigation && navigation.toggled })}
    >
      <ul className="sidebar-nav">
        <li>
          <FavoritesLink to="/info" onClick={toggleNavigation}>
            <FontAwesomeIcon icon={faLeaf} />
          </FavoritesLink>
        </li>
        <li>
          <HomeLink to="/" onClick={toggleNavigation}>
            <FontAwesomeIcon icon={faHome} />
          </HomeLink>
        </li>
        <li>
          <RemoveLink to="#" onClick={event => resetApp(event)}>
            <FontAwesomeIcon icon={faTrash} />
          </RemoveLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(
  mapStateToProps,
  actions
)(Navigation);
