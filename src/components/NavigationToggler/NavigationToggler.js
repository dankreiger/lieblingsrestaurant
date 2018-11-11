import React from 'react';
import { array, func } from 'prop-types'; // // add this
import { pluralize } from './../../utils/functions';
import { NavigationTogglerContainer } from './NavigationToggler.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const NavigationToggler = ({ favorites, toggleNavigation }) => {
  return (
    <NavigationTogglerContainer onClick={toggleNavigation}>
      <FontAwesomeIcon icon={faUtensils} />
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
