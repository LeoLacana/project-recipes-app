import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getIngredientsMeals, getByIngredientsMeals } from '../services/RequestRandom';

function FoodByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getIngredientsMeals().then((response) => {
      setIngredients(response);
      // console.log(response);
    });
  }, []);

  const handleClick = (ingredient) => {
    getByIngredientsMeals(ingredient);
    setRedirect(true);
  };

  if (!ingredients.length) return <div>Loading...</div>;
  if (redirect) return <Redirect to="/comidas" />;

  return (

    <div>
      <Header canSearch={ false } text="Explorar Ingredientes" />
      {ingredients.slice(0, Number('12')).map((ingredient, index) => (
        <button
          onClick={ () => handleClick(ingredient.strIngredient) }
          key={ ingredient.idIngredient }
          type="button"
        >
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ ingredient.idIngredient }
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              data-testid={ `${index}-card-img` }
              alt=""
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
          </div>
        </button>
      ))}
      <Footer />
    </div>
  );
}

export default FoodByIngredients;
