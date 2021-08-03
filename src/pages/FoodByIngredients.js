import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { getIngredientsMeals } from '../services/RequestRandom';

function FoodByIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredientsMeals().then((response) => {
      setIngredients(response);
      console.log(response);
    });
  }, []);

  return (

    <div>
      {ingredients.slice(0, Number('12')).map((ingredient, index) => (
        <div data-testid={ `${index}-ingredient-card` } key={ ingredient.idIngredient }>
          <img src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` } data-testid={ `${index}-card-img` } alt="" />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default FoodByIngredients;
