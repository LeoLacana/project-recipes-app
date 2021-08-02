export const requestIngredient = async (ingrediente) => {
  const reponseIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const results = await reponseIngredient.json();
  // console.log(results.meals);
  return results;
};

export const requestName = async (nome) => {
  const respondeName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  const results = await respondeName.json();
  return results;
};

export const requestLetra = async (primeiraLetra) => {
  const responseLetra = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`);
  const results = await responseLetra.json();
  return results;
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
