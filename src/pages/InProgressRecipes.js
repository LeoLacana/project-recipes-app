import React, { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnFavorite from '../components/BtnFavorite';
import BtnShare from '../components/BtnShare';
import IngredientAndMeasureInProgress from '../components/IngredientAndMeasureInProgress';
import './InProgressRecipes.css';
import { setRecipeLocalStorage } from '../components/SetRecipesStorage';

function InProgressRecipes({ type }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const { recipeId } = useParams();
  const [infoRecipes, setinfoRecipes] = useState({});
  const [ingredientAndMeasure, setingredientAndMeasure] = useState([]);
  const [button, setbutton] = useState(true);

  function tranformamEmArray(e, recipes) {
    return Object.keys(recipes)
      .filter((key) => key.includes(e))
      .map((key) => recipes[key])
      .filter((recipe) => recipe !== '' && recipe !== null);
  }

  const recipeDone = async () => {
    await setRecipeLocalStorage(infoRecipes, type);
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
    getApi();
  }, [type, recipeId]);

  const thumb = type === 'comidas' ? infoRecipes.strMealThumb : infoRecipes.strDrinkThumb;
  const recpName = type === 'comidas' ? infoRecipes.strMeal : infoRecipes.strDrink;
  const recpCat = type === 'comidas' ? infoRecipes.strCategory : infoRecipes.strAlcoholic;
  const { strInstructions } = infoRecipes;

  function changeButton(params) {
    if (params === false) {
      setbutton(false);
    } else setbutton(true);
  }

  return (
    <>
      <div className="container-fluid">
        <img
          className="img-thumbnail
          rounded mx-auto d-block col-md-6 float-md-end mb-3 ms-md-3"
          data-testid="recipe-photo"
          src={ thumb }
          alt={ recpName }
          width={ 300 }
        />
        <div className="container">
          <span data-testid="recipe-title" className="h3 ">
            {recpName}
          </span>
          <div data-testid="recipe-category">{recpCat}</div>
        </div>
        <div className="btn-container container">
          <BtnShare endPoint={ pathname.split('/in-progress')[0] } />
          <BtnFavorite recipe={ infoRecipes } recipeId={ recipeId } type={ type } />
        </div>
      </div>
      <div className="container">
        <ul className="list-group grid">
          <li className="list-group-item">
            <IngredientAndMeasureInProgress
              recipeId={ recipeId }
              type={ type }
              ingredientAndMeasure={ ingredientAndMeasure }
              changeButton={ changeButton }
            />
          </li>
        </ul>
      </div>
      <div className="container instruction">
        <h4>Instructions</h4>
        <div
          classename="col-md-4 ms-auto"
          data-testid="instructions"
        >
          {strInstructions}
        </div>
      </div>
      <button
        className="btn-end-recp"
        type="button"
        data-testid="finish-recipe-btn"
        onClick={ recipeDone }
        disabled={ button }
      >
        Finalizar Receita
      </button>
    </>
  );
}

export default InProgressRecipes;

InProgressRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};
