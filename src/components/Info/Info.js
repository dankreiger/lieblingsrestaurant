import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { InfoContainer, FavoritesRow, AvgRating } from './Info.styles';
import Stars from '../Stars/Stars';

const Info = ({ favorites }) => (
  <InfoContainer>
    <Row>
      <Col>
        <p className="lead">
          {favorites.length} Favorite
          {favorites.length !== 1 ? 's' : ''}
        </p>
      </Col>
    </Row>
    {favorites && (
      <FavoritesRow>
        <Col xs={12} sm={8}>
          <ListGroup>
            {favorites.map(favorite => (
              <ListGroupItem
                key={favorite.placeId}
                className="justify-content-between"
              >
                <div className="info-content-wrapper">
                  <img
                    className="img-fluid"
                    src={
                      favorite.gmaps.photos
                        ? favorite.gmaps.photos[0].getUrl()
                        : favorite.gmaps.icon
                    }
                  />
                  <div>
                    <div>{favorite.description}</div>
                    <AvgRating
                      pill
                      className={classNames({
                        'd-none': !favorite.gmaps.rating
                      })}
                    >
                      {' '}
                      Average Rating: {favorite.gmaps.rating}
                    </AvgRating>
                  </div>
                </div>
                <div>
                  <span>Your rating:</span>
                  <Stars />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </FavoritesRow>
    )}
  </InfoContainer>
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
