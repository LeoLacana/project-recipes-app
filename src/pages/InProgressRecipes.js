import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnFavorite from '../components/BtnFavorite';
import BtnShare from '../components/BtnShare';
import IngredientAndMeasureInProgress from '../components/IngredientAndMeasureInProgress';
import './InProgressRecipes.css';
import { setRecipeLocalStorage } from '../components/SetRecipesStorage';

function InProgressRecipes({ type }) {
  const history = useHistory();
  const { recipeId } = useParams();
  const [infoRecipes, setinfoRecipes] = useState({});
  const [ingredientAndMeasure, setingredientAndMeasure] = useState([]);
  function tranformamEmArray(e, recipes) {
    return Object.keys(recipes)
      .filter((key) => key.includes(e))
      .map((key) => recipes[key])
      .filter((recipe) => recipe !== '' && recipe !== null);
  }

  const recipeDone = () => {
    setRecipeLocalStorage(infoRecipes, type);
    history.push('/receitas-feitas');
  };

  useEffect(() => {
    const getApi = async () => {
      const url = type === 'comidas' ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}` : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
      const getFetch = await fetch(url);
      const json = await getFetch.json();
      const recipes = Object.entries(json)[0][1][0];
      setinfoRecipes(recipes);
      const ingredient = tranformamEmArray('strIngredient', recipes);
      const measure = tranformamEmArray('strMeasure', recipes);
      setingredientAndMeasure(ingredient.map((e, i) => ({ ing: e, mea: measure[i] })));
    };
    console.log('opa');
    getApi();
  }, []);

  const thumb = type === 'comidas' ? infoRecipes.strMealThumb : infoRecipes.strDrinkThumb;
  const recpName = type === 'comidas' ? infoRecipes.strMeal : infoRecipes.strDrink;
  const recpCat = type === 'comidas' ? infoRecipes.strCategory : infoRecipes.strAlcoholic;
  const { strInstructions } = infoRecipes;

  return (
    <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={ thumb }
          alt={ recpName }
          width={ 300 }
        />
      </div>
      <span data-testid="recipe-title" className="h3">
        {recpName}
      </span>
      <span>
        <BtnShare />
        <BtnFavorite recipe={ infoRecipes } recipeId={ recipeId } type={ type } />
      </span>
      <p data-testid="recipe-category">{recpCat}</p>
      <ul className="list-group">
        <li className="list-group-item">
          <IngredientAndMeasureInProgress
            ingredientAndMeasure={ ingredientAndMeasure }
          />
        </li>
      </ul>
      <div>
        <h4>Instructions</h4>
        <div data-testid="instructions">{strInstructions}</div>
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ recipeDone }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default InProgressRecipes;

InProgressRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};
