import React, { useState } from 'react';
import contextRecipes from './ContextRecipes';

export default function ProviderMainScreen({ children }) {
  const [canSearch, setCanSearch] = useState({ search: true });
  console.log(canSearch);
  const recipesState = {
    canSearch,
    setCanSearch,
  };

  return (
    <contextRecipes.Provider value={ recipesState }>
      { children }
    </contextRecipes.Provider>
  );
}

ProviderMainScreen.propTypes = {
  children: PropTypes.func.isRequired,
};
