import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import contextRecipes from '../context/ContextRecipes';

export default function Header() {
  const { canSearch, setCanSearch } = useContext(contextRecipes);

  const handleSerchClick = () => {
    setCanSearch({ search: false });
  };

  return (
    <div>
      <header>
        <Link to="/perfil">
          <img src={ profileIcon } alt="Profile" />
        </Link>
        <h3 data-testid="page-title">Inicial</h3>
      </header>
      <button type="button" onClick={ handleSerchClick }>
        <img src={ searchIcon } alt="Search" />
      </button>
      { canSearch.search ? '' : <SearchBar /> }
    </div>
  );
}
