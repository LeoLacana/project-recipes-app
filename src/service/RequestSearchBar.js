export const requestIngredient = async (ingrediente, type) => {
  if (type === 'comidas') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
    const results = await request.json();
    return results.meals;
  }
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const results = await request.json();
  return results.drinks;
};

export const requestName = async (nome, type) => {
  if (type === 'comidas') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
    const results = await request.json();
    return results.meals;
  }
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`);
  const results = await request.json();
  return results.drinks;
};

export const requestLetra = async (primeiraLetra, type) => {
  if (type === 'comidas') {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
    const results = await request.json();
    return results.meals;
  }
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const results = await request.json();
  return results.drinks;
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
