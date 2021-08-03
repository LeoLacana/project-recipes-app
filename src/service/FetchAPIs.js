export const fetchCats = async (type) => {
  const catUrl = type === 'comida' ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const cats = await fetch(catUrl)
    .then((r) => r.json());
  return (type === 'comida' ? cats.meals : cats.drinks);
};

export const fetchByAll = async (type) => {
  const url = type === 'comida' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const results = await fetch(url)
    .then((r) => r.json());
  return (type === 'comida' ? results.meals : results.drinks);
};

export const fetchByCat = async (type, cat) => {
  const url = type === 'comida' ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`;
  const results = await fetch(url)
    .then((r) => r.json());
  return (type === 'comida' ? results.meals : results.drinks);
};

export const fetchById = async (type, id) => {
  const url = type === 'comida' ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}` : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const results = await fetch(url)
    .then((r) => r.json());
  return (type === 'comida' ? results.meals : results.drinks);
};

export default {
  fetchCats,
  fetchByAll,
  fetchByCat,
  fetchById,
};
