import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = ({ canSearch }) => {
  const searchBtn = (
    <img src={ searchIcon } alt="Search" />
  );
  return (
    <header>
      <Link to="/perfil">
        <img src={ profileIcon } alt="Profile" />
      </Link>
      <h3 data-testid="page-title">Inicial</h3>
      { canSearch ? searchBtn : ''}
    </header>
  );
};

Header.propTypes = {
  canSearch: PropTypes.bool.isRequired,
};

export default Header;
