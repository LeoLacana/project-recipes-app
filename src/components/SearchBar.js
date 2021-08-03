import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  requestIngredient,
  requestName,
  requestLetra } from '../service/RequestSearchBar';

export default function SearchBar({ type }) {
  const [valueRadioSearchBar, setValueRadioSearchBar] = useState('');
  const [valueInputSearchBar, setValueInputSearchBar] = useState('');

  const getValueInput = ({ target }) => {
    setValueInputSearchBar(target.value);
    console.log(type);
  };
  const handleSearchBar = async () => {
    let resultRequest;
    if (valueRadioSearchBar === 'ingrediente') {
      resultRequest = await requestIngredient(valueInputSearchBar, type);
    }
    if (valueRadioSearchBar === 'nome') {
      resultRequest = await requestName(valueInputSearchBar, type);
    }

    if (valueRadioSearchBar === 'primeira letra') {
      if (valueInputSearchBar.length > 1) {
        // eslint-disable-next-line no-alert
        return alert('Sua busca deve conter somente 1 (um) caracter');
      }
      resultRequest = await requestLetra(valueInputSearchBar, type);
    }
    if (resultRequest.length === 1) {
      // return history.push(`/${type}/${resultRequest}`);
      // console.log(history);
    }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="search-input"
        id="search-input"
        onChange={ getValueInput }
      />
      <label htmlFor="ingredient-seatch-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingrediente"
          id="ingredient-search-radio"
          onClick={ () => setValueRadioSearchBar('ingrediente') }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          data-testid="name-search-radio"
          value="nome"
          id="name-search-radio"
          onClick={ () => setValueRadioSearchBar('nome') }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="primeira letra"
          id="first-letter-search-radio"
          onClick={ () => setValueRadioSearchBar('primeira letra') }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearchBar }
        id="exerc-search-btn"
      >
        Buscar
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};
