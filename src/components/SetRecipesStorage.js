import { requestName } from '../service/RequestSearchBar';

export const setRecipeLocalStorage = async (infoRecipes, type) => {
  const recipesDone = type === 'comidas' ? await requestName(infoRecipes.strMeal, type)
    : await requestName(infoRecipes.strDrink, type);

  const data = new Date();
  const dataFormated = `${data.getDate()}-${data.getMonth()}-${data.getFullYear()}`;
  let recipeTags;
  if (recipesDone[0].strTags) {
    recipeTags = recipesDone[0].strTags.split(',');
  }

  const infoRecipeFood = {
    id: recipesDone[0].idMeal,
    type: 'comida',
    area: recipesDone[0].strArea,
    category: recipesDone[0].strCategory,
    alcoholicOrNot: '',
    name: recipesDone[0].strMeal,
    image: recipesDone[0].strMealThumb,
    doneDate: dataFormated,
    tags: recipeTags,
  };
  const infoRecipeDrink = {
    id: recipesDone[0].idDrink,
    type: 'bebida',
    area: '',
    category: recipesDone[0].strCategory,
    alcoholicOrNot: recipesDone[0].strAlcoholic,
    name: recipesDone[0].strDrink,
    image: recipesDone[0].strDrinkThumb,
    doneDate: dataFormated,
    tags: recipeTags,
  };

  const localRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const typeRecipe = type === 'comidas' ? infoRecipeFood : infoRecipeDrink;
  if (localRecipes) {
    localRecipes.push(typeRecipe);
    localStorage.setItem('doneRecipes', JSON.stringify(localRecipes));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([typeRecipe]));
  }
};

export default setRecipeLocalStorage;
