import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteAndMadeRecipes.css';
import Header from '../components/Header';
import BtnShare from '../components/BtnShare';

export default function RecipesMade() {
  const [recipesFiltered, setRecipesFiltered] = useState();
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
    const setAllFilter = async () => {
      const recipesDone = await JSON.parse(localStorage.getItem('doneRecipes'));
      if (recipesDone) {
        setRecipesFiltered(recipesDone);
      }
    };
    setAllFilter();
  }, []);

  const filterCompletedRecipes = (button) => {
    const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (button === 'all' && recipesDone) {
      return setRecipesFiltered(recipesDone);
    }
    if (button === 'food' && recipesDone) {
      const foods = recipesDone.filter((r) => (
        r.type === 'comida'
      ));
      return setRecipesFiltered(foods);
    }
    if (button === 'drink' && recipesDone) {
      const drinks = recipesDone.filter((r) => (
        r.type === 'bebida'
      ));
      return setRecipesFiltered(drinks);
    }
  };

  // const renderShareBtn = (type, id, index) => (
  //   <BtnShare endPoint={ `/${type}s/${id}` } listIndex={ index } />
  // );

  return (
    <div>
      <Header canSearch={ false } text="Receitas Feitas" />
      <div className="filt-made">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          id="filter-by-all-btn"
          onClick={ () => filterCompletedRecipes('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          id="filter-by-food-btn"
          onClick={ () => filterCompletedRecipes('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          id="filter-by-drink-btn"
          onClick={ () => filterCompletedRecipes('drink') }
        >
          Drinks
        </button>
      </div>
      { !recipesFiltered ? '' : (recipesFiltered.map((recipe, index) => (
        <div key={ recipe.id } className="made-cont">
          <div className="made-info">
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <div className="made-card">
                <img
                  alt={ recipe.name }
                  src={ recipe.image }
                  data-testid={ `${index}-horizontal-image` }
                  className="made-img"
                />
                <span data-testid={ `${index}-horizontal-name` }>
                  { recipe.name }
                </span>
              </div>
            </Link>
            <div className="side-info">
              <h5
                className="horizontal-top-text"
                data-testid={ `${index}-horizontal-top-text` }
              >
                <p>
                  { recipe.alcoholicOrNot }
                </p>
                { `${recipe.area} - ${recipe.category}` }
              </h5>
              <h5
                data-testid={ `${index}-horizontal-done-date` }
              >
                { recipe.doneDate }
              </h5>
              <div>
                { vamola(recipe.tags) }
                { a.map((r) => r.map((x, i) => (
                  <div
                    key={ `${index} - ${i}` }
                    data-testid={ `${index}-${x}-horizontal-tag` }
                  >
                    { x }
                  </div>
                ))) }
              </div>
            </div>
          </div>
          <div className="btn-container">
            <BtnShare endPoint={ `/${recipe.type}s/${recipe.id}` } listIndex={ index } />
          </div>
          <hr />
        </div>
      ))) }
    </div>
  );
}
