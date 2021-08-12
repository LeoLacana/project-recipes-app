import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  requestIngredient,
  requestName,
  requestLetra } from '../service/RequestSearchBar';
import contextRecipes from '../context/ContextRecipes';

export default function SearchBar({ type }) {
  const [valueRadioSearchBar, setValueRadioSearchBar] = useState('');
  const [valueInputSearchBar, setValueInputSearchBar] = useState('');
  const { setRecipes } = useContext(contextRecipes);
  const history = useHistory();
  const customAlert = window.alert;

  const getValueInput = ({ target }) => {
    setValueInputSearchBar(target.value);
    console.log(target.value);
  };

  const showSearchRequestResult = (resultRequest) => {
    if (!resultRequest) {
      return null;
    }
    // console.log(resultRequest);
    if (resultRequest.length === 1 && type === 'comidas') {
      history.push(`/${type}/${resultRequest[0].idMeal}`);
      // console.log(history);
    }
    if (resultRequest.length === 1 && type === 'bebidas') {
      history.push(`/${type}/${resultRequest[0].idDrink}`);
      // console.log(history);
    }
    if (resultRequest.length > 1 && type === 'comidas') {
      setRecipes(resultRequest);
    }
    if (resultRequest.length > 1 && type === 'bebidas') {
      setRecipes(resultRequest);
    }
  };

  const handleSearchBar = async () => {
    if (!valueInputSearchBar) {
      return null;
    }
    let resultRequest;
    if (valueRadioSearchBar === 'ingrediente') {
      resultRequest = await requestIngredient(valueInputSearchBar, type);
      // console.log(resultRequest);
    }
    if (valueRadioSearchBar === 'nome') {
      resultRequest = await requestName(valueInputSearchBar, type);
    }
    if (valueRadioSearchBar === 'primeira letra') {
      if (valueInputSearchBar.length > 1) {
        return customAlert('Sua busca deve conter somente 1 (um) caracter');
      }
      resultRequest = await requestLetra(valueInputSearchBar, type);
    }
    // console.log(resultRequest);
    if (!resultRequest) {
      return customAlert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
    await showSearchRequestResult(resultRequest);
  };

  return (
    <form className="search-cont">
      <label htmlFor="inputEmail">
        <input
          type="text"
          data-testid="search-input"
          onChange={ getValueInput }
          className="form-control"
          id="inputEmail"
        />
      </label>
      <div className="checks-cont">
        <div className="form-check">
          <label className="form-check-label" htmlFor="ingredient-search-radio">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="ingredient-search-radio"
              data-testid="ingredient-search-radio"
              onClick={ () => setValueRadioSearchBar('ingrediente') }
            />
            Ingrediente
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="name-search-radio">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="name-search-radio"
              data-testid="name-search-radio"
              onClick={ () => setValueRadioSearchBar('nome') }
            />
            Nome
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="first-letter-search-radio">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="first-letter-search-radio"
              data-testid="first-letter-search-radio"
              onClick={ () => setValueRadioSearchBar('primeira letra') }
            />
            Primeira Letra
          </label>
        </div>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleSearchBar() }
        id="exerc-search-btn"
        className="btn btn-secondary"
      >
        Buscar
      </button>
    </form>
  );
}
SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};
