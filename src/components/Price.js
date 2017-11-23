import React from 'react';
import PropTypes from 'prop-types';

const getCurrency = (country) => {
  switch (country) {
    case 'USA':
      return '$';
    case 'Australia':
      return '$';
    case 'UK':
      return '£'
    default:
      return '£'
  }
}

export default function Price({ country, price }) {
  return <span className='price'>{ getCurrency(country).repeat(price) }</span>;
};

Price.propTypes = {
  country: PropTypes.string,
  price: PropTypes.number.isRequired
};
