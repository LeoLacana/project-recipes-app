import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = ({ canSearch }) => {
  const searchBtn = (
    <object
      data-testid="search-top-btn"
      type="image/svg+xml"
      data={ searchIcon }
    >
      Search
    </object>
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
