export const getRandomDrink = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  return drinks[0];
};

export const getRandomMeal = async () => {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  return meals[0];
};
