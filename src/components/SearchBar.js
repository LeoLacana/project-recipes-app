import React from 'react';

export default function SearchBar() {
  return (
    <form>
      <input type="text" data-testid="search-input" />
      <label htmlFor="ingredient-seatch-radio">
        <input type="radio" data-testid="ingredient-search-radio" value="ingrediente" />
        Ingrediente
      </label>
      <label htmlFor="name-search-radio">
        <input type="radio" data-testid="name-search-radio" value="nome" />
        Nome
      </label>
      <label htmlFor="first-letter-search-radio">
        <input type="radio" data-testid="first-letter-search-radio" value="primeira letra" />
        Primeira Letra
      </label>
      <button type="submit" data-testid="exec-search-btn">Buscar</button>
    </form>
  );
}
