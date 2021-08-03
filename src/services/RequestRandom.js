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
