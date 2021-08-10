import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getIngredientes, getByIngredientsDrinks } from '../services/RequestRandom';

function DrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    getIngredientes().then((response) => {
      setIngredients(response);
      // console.log(response);
    });
  }, []);

  const handleCLick = (ingredient) => {
    getByIngredientsDrinks(ingredient);
    setRedirect(true);
    console.log(ingredient);
  };

  if (!ingredients.length) return <div>Loading...</div>;
  if (redirect) return <Redirect to="/bebidas" />;

  return (

    <div>
      <Header canSearch={ false } text="Explorar Ingredientes" />
      {ingredients.slice(0, Number('12')).map(({ strIngredient1 }, index) => (
        <button
          onClick={ () => handleCLick(strIngredient1) }
          key={ index }
          type="button"
        >

          <div data-testid={ `${index}-ingredient-card` } key={ index }>
            <img src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` } data-testid={ `${index}-card-img` } alt="" />
            <p data-testid={ `${index}-card-name` }>{strIngredient1}</p>
          </div>

        </button>
      ))}
      <Footer />
    </div>
  );
}

export default DrinksByIngredients;
