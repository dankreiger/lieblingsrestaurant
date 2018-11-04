import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

const Info = ({ favorites }) => (
  <Container>
    {favorites &&
      favorites.map(favorite => (
        <Row key={favorite.placeId}>
          <Col>{favorite.description}</Col>
        </Row>
      ))}
  </Container>
);

Info.propTypes = {
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
  null
)(Info);
