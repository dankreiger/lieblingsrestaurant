import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import { Row, Col } from 'reactstrap';
import SimpleMap from '../SimpleMap/SimpleMap';
import { HomeContainer } from './Home.styles';
import classNames from 'classnames';
import NavigationToggler from '../NavigationToggler/NavigationToggler';
import { favoritesTypes } from '../../reducers/types/favorites.types';
import { navigationTypes } from '../../reducers/types/navigation.types';

const Home = ({ favorites, toggleNavigation, navigation }) => (
  <HomeContainer fluid className={classNames({ toggled: navigation.toggled })}>
    <Row noGutters>
      <Col className="d-flex">
        {favorites.length > 0 && (
          <NavigationToggler
            favorites={favorites}
            toggleNavigation={toggleNavigation}
          />
        )}
      </Col>
      <Col
        xs={favorites.length > 0 ? 8 : 12}
        sm={favorites.length > 0 ? 10 : 12}
      >
        <SimpleMap />
      </Col>
    </Row>
  </HomeContainer>
);

Home.propTypes = {
  ...favoritesTypes,
  ...navigationTypes,
  toggleNavigation: func
};

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigation
});

export default connect(
  mapStateToProps,
  actions
)(Home);
