import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import BtnShare from '../components/BtnShare';
import shareIcon from '../images/shareIcon.svg';
import './RecipesMade.css';

export default function RecipesMade() {
  const [recipesFiltered, setRecipesFiltered] = useState();
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const a = [];
  const vamola = (tag) => {
    if (tag) {
      a.push(tag);
      // console.log(a);
      // e
    }
    return '';
  };

  // z

  useEffect(() => {
    const setAllFilter = () => {
      setRecipesFiltered(recipesDone);
    };
    setAllFilter();
  }, []);

  const filterCompletedRecipes = (button) => {
    if (button === 'all') {
      return setRecipesFiltered(recipesDone);
    }
    if (button === 'food') {
      const foods = recipesDone.filter((r) => (
        r.type === 'comida'
      ));
      return setRecipesFiltered(foods);
    }
    if (button === 'drink') {
      const drinks = recipesDone.filter((r) => (
        r.type === 'bebida'
      ));
      return setRecipesFiltered(drinks);
    }
  };

  const renderShareBtn = (type, id, index) => (
    <BtnShare endPoint={ `/${type}s/${id}` } listIndex={ index } />
  );

  return (
    <div>
      <Header canSearch={ false } text="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        id="filter-by-all-btn"
        className="btn btn-secondary"
        onClick={ () => filterCompletedRecipes('all') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        id="filter-by-food-btn"
        className="btn btn-secondary"
        onClick={ () => filterCompletedRecipes('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        id="filter-by-drink-btn"
        className="btn btn-secondary"
        onClick={ () => filterCompletedRecipes('drink') }
      >
        Drinks
      </button>
      { !recipesFiltered ? '' : (recipesFiltered.map((recipe, index) => (
        <div key={ recipe.id } className="cart-recipe-done">
          <img
            alt={ recipe.name }
            src={ recipe.image }
            data-testid={ `${index}-horizontal-image` }
            className="image-recipe-made"
          />
          <h1
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.name }
          </h1>
          <h3
            className="horizontal-top-text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            <p>
              { recipe.alcoholicOrNot }
            </p>
            { `${recipe.area} - ${recipe.category}` }
          </h3>
          <h3
            data-testid={ `${index}-horizontal-done-date` }
          >
            { recipe.doneDate }
          </h3>
          <div>
            { vamola(recipe.tags) }
            { a.map((r) => r.map((x) => (
              <div key={ index } data-testid={ `${index}-${x}-horizontal-tag` }>
                { x }
              </div>
            ))) }
          </div>
          <div
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
          >
            { renderShareBtn(recipe.type, recipe.id, index) }
          </div>
        </div>
      ))) }
    </div>
  );
}
