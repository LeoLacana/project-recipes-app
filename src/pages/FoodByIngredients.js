import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getIngredientsMeals, getByIngredientsMeals } from '../services/RequestRandom';
import contextRecipes from '../context/ContextRecipes';

function FoodByIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const { setAsByIng, setCurrIng } = useContext(contextRecipes);

  useEffect(() => {
    getIngredientsMeals().then((response) => {
      setIngredients(response);
      // console.log(response);
    });
  }, []);

  const handleClick = (ingredient) => {
    getByIngredientsMeals(ingredient);
    setAsByIng(true);
    setCurrIng(ingredient);
    setRedirect(true);
  };

  if (!ingredients.length) return <div>Loading...</div>;
  if (redirect) return <Redirect to="/comidas" />;

  return (

    <div>
      <Header canSearch={ false } text="Explorar Ingredientes" />
      <div className="cards-cont">
        {ingredients.slice(0, Number('12')).map((ingredient, index) => (
          <button
            onClick={ () => handleClick(ingredient.strIngredient) }
            key={ ingredient.idIngredient }
            type="button"
          >
            <div
              data-testid={ `${index}-ingredient-card` }
              key={ ingredient.idIngredient }
              className="ing-card"
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                data-testid={ `${index}-card-img` }
                alt=""
              />
              <span data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</span>
            </div>
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FoodByIngredients;
