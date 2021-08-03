export const requestIngredient = async (ingrediente, type) => {
  let responseIngredient;
  if (type === 'comidas') {
    responseIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
    const results = await responseIngredient.json();
    return results.meals;
  }
  responseIngredient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const results = await responseIngredient.json();
  return results.drinks;
};

export const requestName = async (nome, type) => {
  let responseName;
  if (type === 'comidas') {
    responseName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
    const results = await responseName.json();
    return results.meals;
  }
  responseName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  const results = await responseName.json();
  return results.drinks;
};

export const requestLetra = async (primeiraLetra, type) => {
  let responseLetra;
  if (type === 'comidas') {
    responseLetra = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
    const results = await responseLetra.json();
    return results.meals;
  }
  responseLetra = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const results = await responseLetra.json();
  return results.drinks;
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
