import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const BtnStartRecipe = ({ recipeId, type }) => {
  const [recpCondtion, setCondition] = useState('');
  const history = useHistory();

  const findByIdArray = (array) => array.find(({ id }) => id === recipeId);
  const findByIdObject = (obj) => (type === 'comidas'
    ? obj.meals[recipeId]
    : obj.cocktails[recipeId]);

  useEffect(() => {
    const setIfDone = async () => {
      const doneRecps = JSON.parse(localStorage.getItem('doneRecipes'));
      const recpsInProg = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (doneRecps && findByIdArray(doneRecps)) {
        setCondition('done');
      } else if (recpsInProg && findByIdObject(recpsInProg)) {
        setCondition('in-progress');
      }
    };
    setIfDone();
  }, []);

  const toInProgress = (event) => {
    event.preventDefault();
    const newUrl = type === 'comidas'
      ? `/comidas/${recipeId}/in-progress` : `/bebidas/${recipeId}/in-progress`;
    history.push(newUrl);
  };

  const renderBtn = (text) => (
    <button
      type="submit"
      data-testid="start-recipe-btn"
      className="btn-start-recp"
      onClick={ (event) => toInProgress(event) }
    >
      { text }
    </button>);

  switch (recpCondtion) {
  case 'done':
    return '';
  case 'in-progress':
    return renderBtn('Continuar Receita');
  default:
    return renderBtn('Iniciar Receita');
  }
};

BtnStartRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default BtnStartRecipe;
