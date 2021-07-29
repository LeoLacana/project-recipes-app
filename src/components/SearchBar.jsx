import React from 'react';

export default function SearchBar() {
  return (
    <form>
      <input type="text" data-testid="search-input" />
      <label htmlFor="ingredient-seatch-radio">
        <input type="radio" data-testid="ingredient-search-radio" />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input type="radio" data-testid="name-search-radio" />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input type="radio" data-testid="first-letter-search-radio" />
        Primeira Letra
      </label>
      <button type="submit" data-testid="search-input">Buscar</button>
    </form>
  );
}
