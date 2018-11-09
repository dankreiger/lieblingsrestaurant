import React from 'react';
import classNames from 'classnames';
import { array, arrayOf, boolean, number, shape, string } from 'prop-types';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import {
  FavoritesRow,
  InfoContainer,
  NavigationTogglerRow
} from './Info.styles';
import * as actions from '../../actions';
import FavoritedItem from '../FavoritedItem/FavoritedItem';
import NavigationToggler from '../NavigationToggler/NavigationToggler';

const Info = ({ favorites, history, toggleNavigation, navigationToggled }) => {
  const sortedFavorites = () => {
    return favorites.sort((a, b) => b.rating - a.rating);
  };

  return (
    <InfoContainer fluid className={classNames({ toggled: navigationToggled })}>
      <NavigationTogglerRow>
        <Col>
          <NavigationToggler
            favorites={favorites}
            toggleNavigation={toggleNavigation}
          />
          {/* <div className="fas fa-angle-right arrow-icon" />
            <div className="fas fa-utensils" />
            <div className="favorites-counter">
              {pluralize('favorite', favorites)}
            </div> */}
        </Col>
      </NavigationTogglerRow>
      {favorites && (
        <FavoritesRow noGutters>
          {sortedFavorites().map((favorite, index) => (
            <Col xs={12} sm={6} md={4} xl={3} key={favorite.placeId}>
              <FavoritedItem
                history={history}
                favorite={favorite}
                itemIndex={index}
              />
            </Col>
          ))}
        </FavoritesRow>
      )}
    </InfoContainer>
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

const mapStateToProps = ({ favorites, navigation }) => ({
  favorites,
  navigationToggled: navigation.toggled
});

export default connect(
  mapStateToProps,
  actions
)(Info);
