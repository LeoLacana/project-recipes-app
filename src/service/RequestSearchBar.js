const messageAlert = () => (
  // eslint-disable-next-line no-alert
  alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
);
export const requestIngredient = async (ingrediente, type) => {
  if (type === 'comidas') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
      .then((result) => result.json())
      .then((r) => r.meals)
      .catch(() => {
        messageAlert();
        return [];
      });
  }
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`)
    .then((results) => results.json())
    .then((r) => r.drinks)
    .catch(() => {
      messageAlert();
      return [];
    });
};

export const requestName = async (nome, type) => {
  if (type === 'comidas') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`)
      .then((results) => results.json())
      .then((r) => r.meals)
      .catch(() => {
        messageAlert();
        return [];
      });
  }
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
    .then((results) => results.json())
    .then((r) => r.drinks)
    .catch(() => {
      messageAlert();
      return [];
    });
};

export const requestLetra = async (primeiraLetra, type) => {
  if (type === 'comidas') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
      .then((results) => results.json())
      .then((r) => r.meals)
      .catch(() => {
        messageAlert();
        return [];
      });
  }
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`)
    .then((results) => results.json())
    .then((r) => r.drinks)
    .catch(() => {
      messageAlert();
      return [];
    });
};

export default {
  requestIngredient,
  requestName,
  requestLetra,
};
