export const getRandomDrink = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  console.log(drinks);
  return drinks[0];
};

export const getIngredientes = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => response.json());
  return drinks;
};

export const getRandomMeal = async () => {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  console.log(meals);
  return meals[0];
};

export async function getIngredientsMeals() {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then((data) => data.json());
  return meals;
}

export async function getArea() {
  const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then((data) => data.json());
  return responseApi.meals;
}

export async function getMealsByArea(area) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => response.json());
  return meals;
}

export async function getRecomendation() {
  const responseApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((data) => data.json());
  return responseApi.meals;
}

export async function getByIngredientsMeals(ingredient) {
  const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((data) => data.json());
  return meals;
}

export async function getByIngredientsDrinks(ingredient) {
  const { drinks } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((data) => data.json());
  return drinks;
}
