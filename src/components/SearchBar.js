import React from 'react';
import {
  requestIngredient,
  requestName,
  requestLetra } from '../service/RequestSearchBar';

export default function SearchBar() {
  let radio;

  const setRadioSelected = ({ target }) => {
    radio = target.value;
  };

  const handleSearchBar = async () => {
    const valueInput = document.getElementById('search-input').value;
    if (radio === 'ingrediente') {
      const resultRequestIngredient = await requestIngredient(valueInput);
      console.log(resultRequestIngredient);
      return resultRequestIngredient;
    }
    if (radio === 'nome') {
      const resultRequestName = await requestName(valueInput);
      // console.log(resultRequestName);
      return resultRequestName;
    }

    if (radio === 'primeira letra') {
      let result;
      if (valueInput.length > 1) {
        result = alert('Sua busca deve conter somente 1 (um) caracter');
      } else {
        result = await requestLetra(valueInput);
      }
      return result;
    }
  };

  return (
    <form>
      <input type="text" data-testid="search-input" id="search-input" />
      <label htmlFor="ingredient-seatch-radio">
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingrediente"
          id="ingredient-search-radio"
          onClick={ setRadioSelected }
        />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input
          type="radio"
          data-testid="name-search-radio"
          value="nome"
          id="name-search-radio"
          onClick={ setRadioSelected }
        />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="primeira letra"
          id="first-letter-search-radio"
          onClick={ setRadioSelected }
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
