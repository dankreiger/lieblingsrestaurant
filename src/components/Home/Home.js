import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import * as actions from './../../actions';
import SimpleMap from '../SimpleMap/SimpleMap';
import { HomeContainer } from './Home.styles';

const Home = ({ favorites, deleteFavorite }) => (
  <HomeContainer>
    <Container fluid>
      <Row>
        <Col>
          <SimpleMap />
        </Col>
      </Row>
    </Container>
  </HomeContainer>
);

Home.propTypes = {
  favorites: arrayOf(
    shape({
      description: string.isRequired
    })
  )
};

const mapStateToProps = ({ favorites }) => ({
  favorites: favorites
});

export default connect(
  mapStateToProps,
  actions
)(Home);
