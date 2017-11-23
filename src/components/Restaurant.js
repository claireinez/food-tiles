import React from 'react';
import PropTypes from 'prop-types';

import Price from './Price';

import '../styles/Restaurant.css';

export default function Restaurant({ country, restaurant }) {
  const {
    name,
    categories,
    price,
    image
  } = restaurant;

  return (
    <div className='restaurant-thumbnail'>
      <img src={ image } className='restaurant-image' alt={ name } />
      <h3 className='restaurant-title'>{ name }</h3>
      <p className='restaurant-subtitle'>
        { categories.join('・') }
        { '・' }
      </p>
      <Price price={ price } country={ country } />
    </div>
  );
};

Restaurant.propTypes = {
  country: PropTypes.string,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
