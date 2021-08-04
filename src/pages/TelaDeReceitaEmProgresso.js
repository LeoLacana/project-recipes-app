import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import './tela.css';

function TelaDeReceitaEmProgresso(type) {
  const [infoRecipes, setinfoRecipes] = useState({});
  const [ingredientAndMeasure, setingredientAndMeasure] = useState([]);

  function tranformamEmArray(e, recipes) {
    return Object.keys(recipes)
      .filter((key) => key.includes(e))
      .map((key) => recipes[key])
      .filter((recipe) => recipe !== '' && recipe !== null);
  }
  useEffect(() => {
    const getApi = async () => {
      const getFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
      const json = await getFetch.json();
      const recipes = Object.entries(json)[0][1][0];
      setinfoRecipes(recipes);
      const ingredient = tranformamEmArray('strIngredient', recipes);
      const measure = tranformamEmArray('strMeasure', recipes);
      setingredientAndMeasure(ingredient.map((e, i) => ({ ing: e, mea: measure[i] })));
    };
    getApi();
  }, []);

  function addClass({ target }) {
    if (target.parentNode.classList.value === '') target.parentNode.classList.add('o');
    else target.parentNode.classList.remove('o');
  }

  /*   if (type === Meal) { */
  const { strCategory, strInstructions, strMealThumb, strMeal } = infoRecipes;
  return (
    <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={ strMealThumb }
          alt={ strMeal }
          width={ 300 }
        />
      </div>
      <span data-testid="recipe-title" className="h3">
        {strMeal}
      </span>
      <span>
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="compartilhar" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favoritar" />
        </button>
      </span>
      <p>{strCategory}</p>
      <ul className="list-group">
        <li className="list-group-item">
          {ingredientAndMeasure.map(({ ing, mea }, i) => (
            <p data-testid={ `${i}-ingredient-step` } key={ i }>
              <input className="form-check-input me-1" type="checkbox" value="" onClick={ (e) => addClass(e) } aria-label="..." />
              {`${ing} - ${mea}`}
            </p>
          ))}
        </li>
      </ul>
      <div>
        <h4>Instructions</h4>
        <div data-testid="instructions">{strInstructions}</div>
      </div>
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

/*   if (type === Drink) {
    const { strAlcoholic, strInstructions, strDrinkThumb, strDrink } = infoRecipes;
    return (
      <div>
      <div>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt={ strDrink }
          width={ 300 }
        />
      </div>
      <span>
        <span>
          <h3 data-testid="recipe-title">{strDrink}</h3>
          <span>{strAlcoholic}</span>
        </span>
        <span>
          <button type="button" data-testid="share-btn">
            <img src={ shareIcon } alt="compartilhar" />
          </button>
          <button type="button" data-testid="favorite-btn">
            <img src={ whiteHeartIcon } alt="favoritar" />
          </button>
        </span>
      </span>
      <div>
        <h4>Instructions</h4>
        <div data-testid="instructions">{strInstructions}</div>
      </div>
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  }

} */

export default TelaDeReceitaEmProgresso;
