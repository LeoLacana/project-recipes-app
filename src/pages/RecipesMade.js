import React from 'react';
import Header from '../components/Header';

export default function RecipesMade() {
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
        Food
      </button>
      { console.log(JSON.parse(localStorage.getItem('Kumpir'))) }
    </div>
  );
}
