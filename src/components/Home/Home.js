import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SimpleMap from '../SimpleMap/SimpleMap';

const Home = () => (
  <Container fluid>
    <Row>
      <Col>
        <SimpleMap />
      </Col>
    </Row>
  </Container>
);

export default Home;
