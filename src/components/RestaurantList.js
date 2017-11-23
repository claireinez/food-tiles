import React from 'react';
import PropTypes from 'prop-types';

import Restaurant from './Restaurant';

import '../styles/RestaurantList.css';

export default function RestaurantList({ restaurants, location, country }) {
  return (
    <div className='restaurant-list'>
      <h2 className='restaurant-list-number'>{ `${ restaurants.length } restaurants can deliver to ${ location }` }</h2>
      {
        restaurants.map(
          (restaurant) => <Restaurant key={ restaurant.id } restaurant={ restaurant } country={ country } />
        )
      }
    </div>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.array.isRequired
};

RestaurantList.defaultProps = {
  services: []
};
