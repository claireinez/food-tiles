import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Header.css';

export default function Header({ location }) {
  return (
    <div className='app-header'>
      <p className='header-surtitle'>Restaurants delivering to</p>
      <h2 className='header-title'>{ location }</h2>
      <button className='header-location-button'>Change location</button>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.string.isRequired
};
