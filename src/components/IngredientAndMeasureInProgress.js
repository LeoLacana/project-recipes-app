import React, { useEffect, useState } from 'react';

const cocktaileAndMeals = {
  cocktails: {},
  meals: {},
};
function IngredientAndMeasureInProgress({
  recipeId,
  type,
  ingredientAndMeasure,
  changeButton }) {
  const [state, setstate] = useState([]);
  const [verifyRecipe, setverifyRecipe] = useState([0]);

  const findByIdObject = (obj) => (type === 'comidas'
    ? obj.meals[recipeId]
    : obj.cocktails[recipeId]);

  useEffect(() => {
    if (verifyRecipe.length === ingredientAndMeasure.length) {
      changeButton(false);
    } else changeButton(true);
  }, [verifyRecipe]);

  useEffect(() => {
    const recpsInProg = async () => {
      const recpsinprog = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (recpsinprog) {
        const a = findByIdObject(recpsinprog);
        if (a) {
          setstate(a);
          setverifyRecipe(a);
        }
      } else {
        localStorage.setItem('inProgressRecipes', JSON.stringify(cocktaileAndMeals));
      }
    };
    recpsInProg();
  }, []);

  function addLocaStorage(index) {
    const drinkOrMeals = type === 'comidas' ? 'meals' : 'cocktails';
    const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (local[drinkOrMeals][recipeId]) {
      setverifyRecipe([...verifyRecipe, index]);
      const newLocal = {
        ...local,
        [drinkOrMeals]: {
          ...local[drinkOrMeals],
          [recipeId]: [
            ...local[drinkOrMeals][recipeId],
            index,
          ],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
    } else {
      setverifyRecipe([index]);
      console.log(verifyRecipe);
      const newLocal = {
        ...local,
        [drinkOrMeals]: {
          ...local[drinkOrMeals],
          [recipeId]: [
            index,
          ],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
    }
  }

  function addClass({ target }, index) {
    if (target.parentNode.classList.value === '') {
      target.parentNode.classList.add('o');
      addLocaStorage(index);
    } else {
      target.parentNode.classList.remove('o');
      const drinkOrMeals = type === 'comidas' ? 'meals' : 'cocktails';
      const local = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const newIndex = local[drinkOrMeals][recipeId].filter((number) => number !== index);
      const newLocal = {
        ...local,
        [drinkOrMeals]: {
          ...local[drinkOrMeals],
          [recipeId]: newIndex,
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newLocal));
      setverifyRecipe(newIndex);
    }
  }
  return (
    ingredientAndMeasure.map(({ ing, mea }, index) => {
      const checkClasseP = state.includes(index) ? 'o' : '';
      const checkInput = state.includes(index) ? 'checked' : '';
      return (
        <div key={ index } className="row justify-content-center">
          <span
            data-testid={ `${index}-ingredient-step` }
            index={ index }
            className={ checkClasseP }
          >
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              onClick={ (e) => addClass(e, index) }
              aria-label="..."
              defaultChecked={ checkInput }
            />
            {`${ing} - ${mea}`}
          </span>
        </div>
      );
    })
  );
}

export default IngredientAndMeasureInProgress;
