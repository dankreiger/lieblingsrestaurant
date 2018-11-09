import React from 'react';
import { array, func } from 'prop-types'; // // add this
import { pluralize } from './../../utils/functions';
import { NavigationTogglerContainer } from './NavigationToggler.styles';

const NavigationToggler = ({ favorites, toggleNavigation }) => {
  return (
    <NavigationTogglerContainer onClick={toggleNavigation}>
      {/* <div className="fas fa-angle-left arrow-icon" /> */}
      <div className="fas fa-utensils" />
      <div className="favorites-counter">
        {pluralize('favorite', favorites)}
      </div>
    </NavigationTogglerContainer>
  );
};

NavigationToggler.propTypes = {
  favorites: array,
  toggleNavigation: func
};

export default NavigationToggler;
