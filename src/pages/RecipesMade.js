import React from 'react';
import Header from '../components/Header';
import BtnShare from '../components/BtnShare';

export default function RecipesMade() {
  const recipesDone = JSON.parse(localStorage.getItem('doneRecipes'));
  const a = [];
  const vamola = (tag) => {
    if (tag) {
      a.push(tag);
      // console.log(a);
    }
    return '';
  };

  return (
    <div>
      <Header canSearch={ false } text="Receitas Feitas" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        id="filter-by-all-btn"
        className="btn btn-secondary"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        id="filter-by-food-btn"
        className="btn btn-secondary"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        id="filter-by-drink-btn"
        className="btn btn-secondary"
      >
        Drinks
      </button>
      { !recipesDone ? '' : (recipesDone.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            alt={ recipe.name }
            src={ recipe.image }
            data-testid={ `${index}-horizontal-image` }
            className="image-recipe-made"
          />
          <h1
            className="horizontal-top-text"
            data-testid={ `${index}-horizontal-top-text` }
          >
            { recipe.category }
          </h1>
          <h3
            data-testid={ `${index}-horizontal-name` }
          >
            { recipe.name }
          </h3>
          <h3
            data-testid={ `${index}-horizontal-done-date` }
          >
            { recipe.doneDate }
          </h3>
          <div
            data-testid={ `${index}-horizontal-share-btn` }
            // data-testid={ `${index}-${recipe.tag1}-horizontal-tag` }
          >
            <BtnShare />
          </div>
          <div>
            { vamola(recipe.tags) }
            { a.map((r) => r.map((x) => (
              <div key={ index } data-testid={ `${index}-${x}-horizontal-tag` }>
                { x }
              </div>
            ))) }
          </div>
        </div>
      ))) }
      {/* { a.map((r) => (
        <div key={ r }>
          { r.map((s, index) => (
            <h4 key={ s } data-testid={ `${index}-${s}-horizontal-tag` }>
              { s }
              { console.log(s) }
            </h4>
          )) }
        </div>
      )) } */}
    </div>
  );
}
