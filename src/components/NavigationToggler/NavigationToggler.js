import React from 'react';
// import PropTypes from 'prop-types'; // // add this
import { pluralize } from './../../utils/functions';
import { NavigationTogglerContainer } from './NavigationToggler.styles';

const NavigationToggler = ({ favorites, toggleNavigation }) => {
  return (
    <NavigationTogglerContainer onClick={toggleNavigation}>
      <div className="fas fa-angle-left arrow-icon" />
      <div className="fas fa-utensils" />
      <div className="favorites-counter">
        {pluralize('favorite', favorites)}
      </div>
    </NavigationTogglerContainer>
  );
};

export default NavigationToggler;
