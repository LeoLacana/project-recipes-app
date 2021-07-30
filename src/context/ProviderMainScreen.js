import React, { useState } from 'react';
import PropTypes from 'prop-types';
import contextRecipes from './ContextRecipes';

export default function ProviderMainScreen({ children }) {
  const [enableSearch, setEnableSearch] = useState(true);
  const recipesState = {
    enableSearch,
    setEnableSearch,
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
