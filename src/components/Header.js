import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import contextRecipes from '../context/ContextRecipes';

const Header = ({ canSearch, type, text }) => {
  const { enableSearch, setEnableSearch } = useContext(contextRecipes);

  const handleSerchClick = () => {
    if (enableSearch === true) {
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
    }
  };

  return (
    <div>
      <header>
        <Link to="/perfil">
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
        </Link>
        <h3 data-testid="page-title">{ text }</h3>
      </header>
      { canSearch ? (
        <button type="button" onClick={ handleSerchClick }>
          <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
        </button>
      ) : ''}
      { enableSearch ? '' : <SearchBar type={ type } /> }
    </div>
  );
};

Header.propTypes = {
  canSearch: PropTypes.bool.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};
Header.defaultProps = {
  type: '',
};

export default Header;
