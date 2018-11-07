import React from 'react';
import { array, arrayOf, boolean, number, shape, string } from 'prop-types';
import { Container, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { FavoritesRow } from './Info.styles';
import * as actions from '../../actions';
import FavoritedItem from '../FavoritedItem/FavoritedItem';

const Info = ({ favorites, history }) => {
  const sortedFavorites = () => {
    return favorites.sort((a, b) => b.rating - a.rating);
  };

  return (
    <Container fluid>
      {favorites && (
        <FavoritesRow noGutters>
          {sortedFavorites().map(favorite => (
            <Col xs={12} sm={6} md={4} xl={3} key={favorite.placeId}>
              <FavoritedItem history={history} favorite={favorite} />
            </Col>
          ))}
        </FavoritesRow>
      )}
    </Container>
  );
};

Info.propTypes = {
  favorites: arrayOf(
    shape({
      description: string,
      isFixture: boolean,
      label: string,
      matchedSubstrings: shape({
        length: number,
        offset: number
      }),
      placeId: string,
      gmaps: shape({
        adr_address: string,
        formatted_address: string,
        formatted_phone_number: string,
        icon: string,
        id: string,
        name: string,
        photos: array,
        place_id: string,
        rating: number,
        reference: string,
        reviews: array,
        url: string
      }),
      location: shape({
        lat: number,
        lng: number
      }),
      photo: string,
      favorited: boolean
    })
  )
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(Info);
