import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
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
        <FavoritesRow>
          {sortedFavorites().map(favorite => (
            <Col xs={6} sm={4} key={favorite.placeId}>
              <FavoritedItem
                favoritesCount={favorites.length}
                history={history}
                favorite={favorite}
              />
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
      description: string.isRequired
    })
  )
};

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(
  mapStateToProps,
  actions
)(Info);
