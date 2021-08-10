import React, { useEffect, useState } from 'react';

const cocktaileAndMeals = {
  cocktails: {},
  meals: {},
};
function IngredientAndMeasureInProgress({ recipeId, type, ingredientAndMeasure }) {
  const [state, setstate] = useState([]);

  const findByIdObject = (obj) => (type === 'comidas'
    ? obj.meals[recipeId]
    : obj.cocktails[recipeId]);

  useEffect(() => {
    const recpsInProg = async () => {
      const recpsinprog = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (recpsinprog) {
        const a = findByIdObject(recpsinprog);
        if (a) {
          setstate(a);
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
      target.classList.add('o');
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
    }
  }
  console.log(state);
  return (
    ingredientAndMeasure.map(({ ing, mea }, index) => {
      const checkClasseP = state.includes(index) ? 'o' : '';
      const checkInput = state.includes(index) ? 'checked' : '';
      return (
        <p
          data-testid={ `${index}-ingredient-step` }
          index={ index }
          className={ checkClasseP }
          key={ index }
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
        </p>
      );
    })
  );
}

export default IngredientAndMeasureInProgress;
