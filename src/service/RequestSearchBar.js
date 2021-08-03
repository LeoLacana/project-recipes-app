export const requestIngredient = async (ingrediente, type) => {
  let responseIngredient;
  if (type === 'comida') {
    responseIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  } else {
    responseIngredient = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  }
  const results = await responseIngredient.json();
  return results.meals;
};

export const requestName = async (nome, type) => {
  let responseName;
  if (type === 'comida') {
    responseName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  } else {
    responseName = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  }
  const results = await responseName.json();
  return results.meals;
};

export const requestLetra = async (primeiraLetra, type) => {
  let responseLetra;
  if (type === 'comida') {
    responseLetra = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  } else {
    responseLetra = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  }
  const results = await responseLetra.json();
  return results.meals;
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
