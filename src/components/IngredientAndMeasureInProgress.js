import React from 'react';

function IngredientAndMeasureInProgress({ ingredientAndMeasure }) {
  console.log(ingredientAndMeasure);
  function addClass({ target }) {
    if (target.parentNode.classList.value === '') target.parentNode.classList.add('o');
    else target.parentNode.classList.remove('o');
  }
  return (
    ingredientAndMeasure.map(({ ing, mea }, index) => (
      <p data-testid={ `${index}-ingredient-step` } key={ index }>
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          onClick={ (e) => addClass(e) }
          aria-label="..."
        />
        {`${ing} - ${mea}`}
      </p>
    ))
  );
}

export default IngredientAndMeasureInProgress;
