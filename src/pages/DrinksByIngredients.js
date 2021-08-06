import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getIngredientes } from '../services/RequestRandom';

function DrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredientes().then((response) => {
      setIngredients(response);
      console.log(response);
    });
  }, []);

  return (

    <div>
      <Header canSearch={ false } text="Explorar Ingredientes" />
      {ingredients.slice(0, Number('12')).map((ingredient, index) => (
        <div data-testid={ `${index}-ingredient-card` } key={ index }>
          <img src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` } data-testid={ `${index}-card-img` } alt="" />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default DrinksByIngredients;
