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
        <NavigationToggler
          favorites={favorites}
          toggleNavigation={toggleNavigation}
        />
      </Col>
      <Col xs={8} sm={10}>
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
