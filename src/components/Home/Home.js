import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import { Row, Col } from 'reactstrap';
import SimpleMap from '../SimpleMap/SimpleMap';
import { HomeContainer } from './Home.styles';
import classNames from 'classnames';
import NavigationToggler from '../NavigationToggler/NavigationToggler';

const Home = ({ favorites, toggleNavigation, navigationToggled }) => (
  <HomeContainer fluid className={classNames({ toggled: navigationToggled })}>
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

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigationToggled: navigation.toggled
});

export default connect(
  mapStateToProps,
  actions
)(Home);
