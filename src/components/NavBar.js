import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/logo.svg';
import defaultAvatar from '../assets/avatar.svg';

import '../styles/NavBar.css';

export default function NavBar({ user, country }) {
  const {
    firstName,
    lastName,
    image
  } = user;

  return (
    <div className='nav-bar'>
      <img src={ logo } className='nav-bar-logo' alt='Deliveroo logo' />
      <span className='user-info'>
        <img src={ image || defaultAvatar } className='user-avatar' alt='User avatar' />
        <span className='user-name'>{ `${ firstName } ${ lastName }` }</span>
      </span>
    </div>
  );
};

NavBar.propTypes = {
  country: PropTypes.string,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
};
