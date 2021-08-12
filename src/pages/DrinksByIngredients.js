import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getIngredientes, getByIngredientsDrinks } from '../services/RequestRandom';
import contextRecipes from '../context/ContextRecipes';

function DrinksByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { setAsByIng, setCurrIng } = useContext(contextRecipes);

  useEffect(() => {
    getIngredientes().then((response) => {
      setIngredients(response);
      // console.log(response);
    });
  }, []);

  const handleCLick = (ingredient) => {
    getByIngredientsDrinks(ingredient);
    setAsByIng(true);
    setCurrIng(ingredient);
    setRedirect(true);
  };

  if (!ingredients.length) return <div>Loading...</div>;
  if (redirect) return <Redirect to="/bebidas" />;

  return (

    <div>
      <Header canSearch={ false } text="Explorar Ingredientes" />
      <div className="cards-cont">
        {ingredients.slice(0, Number('12')).map(({ strIngredient1 }, index) => (
          <button
            onClick={ () => handleCLick(strIngredient1) }
            key={ index }
            type="button"
          >

            <div
              data-testid={ `${index}-ingredient-card` }
              key={ index }
              className="ing-card"
            >
              <img src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` } data-testid={ `${index}-card-img` } alt="" className="ing-img" />
              <span data-testid={ `${index}-card-name` }>{strIngredient1}</span>
            </div>

          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default DrinksByIngredients;
