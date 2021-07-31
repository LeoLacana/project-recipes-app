export const getRandomDrink = async () => {
  const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  console.log(drinks);
  return drinks[0];
};

export const getRandomMeal = async () => {
  const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json());
  console.log(meals);
  return meals[0];
};
