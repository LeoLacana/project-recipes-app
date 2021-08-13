import React, { useEffect, useState } from 'react';
import './RecipeDetails.css';
import PropTypes from 'prop-types';
import BtnStartRecipe from '../components/BtnStartRecipe';
import BtnShare from '../components/BtnShare';
import BtnFavorite from '../components/BtnFavorite';
import { fetchById, fetchByAll } from '../service/FetchAPIs';

const mgc6 = 6;
const mgc16 = 16;
const mgc21 = 21;

const RecipeDetails = ({ type, match }) => {
  const { recipeId } = match.params;
  const [recipe, setRecipe] = useState({});
  const [ings, setIngs] = useState([]);
  const [mealVideo, setVideo] = useState('');
  const [recomendations, setRecs] = useState([]);
  useEffect(() => {
    const getRecipe = async () => {
      const result = await fetchById(type, recipeId);
      // console.log(result);
      const recs = await type === 'comidas'
        ? await fetchByAll('bebida') : await fetchByAll('comidas');
      setRecipe(result[0]);
      setRecs(recs);
    };
    getRecipe();
  }, [recipeId]);

  useEffect(() => {
    const getIngs = async () => {
      const ingsArr = [];
      const ingsLimit = type === 'comidas' ? mgc21 : mgc16;
      for (let i = 1; i < ingsLimit; i += 1) {
        const currIng = recipe[`strIngredient${i}`];
        if (currIng) {
          const currMeas = recipe[`strMeasure${i}`];
          ingsArr.push({ ing: currIng, meas: currMeas });
        }
      }
      setIngs(ingsArr);
    };
    getIngs();
    if (Object.keys(recipe).length !== 0 && type === 'comidas') {
      const vidEndPoint = recipe.strYoutube.split('=')[1];
      setVideo(`https://www.youtube-nocookie.com/v/${vidEndPoint}`);
    }
  }, [recipe]);

  const renderRecomendations = () => (
    <div className="carousel">
      {recomendations.slice(0, mgc6).map((r, i) => {
        const thumb = type === 'comidas' ? r.strDrinkThumb : r.strMealThumb;
        const recName = type === 'comidas' ? r.strDrink : r.strMeal;
        return (
          <div
            key={ `rec-${i}` }
            data-testid={ `${i}-recomendation-card` }
            className="reco-card"
          >
            <img src={ thumb } alt={ recName } className="recipe-img" />
            <span data-testid={ `${i}-recomendation-title` }>{ recName }</span>
          </div>);
      })}
    </div>
  );

  const recipeInfo = () => {
    const thumb = type === 'comidas' ? recipe.strMealThumb : recipe.strDrinkThumb;
    const recpName = type === 'comidas' ? recipe.strMeal : recipe.strDrink;
    const recpCat = type === 'comidas' ? recipe.strCategory : recipe.strAlcoholic;
    return (
      <div className="recipe-info">
        <img
          src={ thumb }
          alt={ recpName }
          className="dtl-img"
          data-testid="recipe-photo"
        />
        <h2 data-testid="recipe-title">{ recpName }</h2>
        <h4 data-testid="recipe-category">{ recpCat }</h4>
        <hr />
        <div className="btn-container">
          <BtnShare />
          <BtnFavorite recipe={ recipe } type={ type } recipeId={ recipeId } />
        </div>
        <hr />
        <ul>
          {ings.map(({ ing, meas }, i) => (
            <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>
              { `${ing} - ${meas}` }
            </li>
          ))}
        </ul>
        <hr />
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        <hr />
        { type === 'comidas'
          ? (
            <object
              data-testid="video"
              aria-label="meal-video"
              className="meal-video"
              width="300"
              height="200"
              data={ mealVideo }
            />)
          : '' }
      </div>
    );
  };
  return (
    <div className="details-page">
      { recipeInfo() }
      { renderRecomendations() }
      <BtnStartRecipe recipeId={ recipeId } type={ type } />
    </div>
  );
};

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  match: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ])).isRequired,
};

export default RecipeDetails;
