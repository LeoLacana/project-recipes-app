export const requestIngredient = async (ingrediente, type) => {
  const ingredientUrl = type === 'comidas' ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const ingredientRequest = await fetch(ingredientUrl);
  const mealOrDrinks = type === 'comidas' ? 'meals' : 'drinks';
  return ingredientRequest.json()
    .then((r) => r[`${mealOrDrinks}`])
    .catch(() => {
      const b = [];
      return b;
    });
};

export const requestName = async (nome, type) => {
  const nameUrl = type === 'comidas' ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;
  const nameRequest = await fetch(nameUrl);
  const mealOrDrinks = type === 'comidas' ? 'meals' : 'drinks';
  return nameRequest.json()
    .then((r) => r[`${mealOrDrinks}`])
    .catch(() => {
      const b = [];
      return b;
    });
};

export const requestLetra = async (primeiraLetra, type) => {
  const primeiraLetraUrl = type === 'comidas' ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;
  const primeiraLetraRequest = await fetch(primeiraLetraUrl);
  const mealOrDrinks = type === 'comidas' ? 'meals' : 'drinks';
  return primeiraLetraRequest.json()
    .then((r) => r[`${mealOrDrinks}`])
    .catch(() => {
      const b = [];
      return b;
    });
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
