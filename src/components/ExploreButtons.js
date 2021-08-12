import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRandomMeal, getRandomDrink } from '../services/RequestRandom';

function ExploreButtons({ food }) {
  const [idDrink, setIdDrink] = useState('');
  const [idMeal, setIdMeal] = useState('');

  function fetchRandomDrink() {
    getRandomDrink().then((response) => {
      setIdDrink(response.idDrink);
    });
  }

  function fetchRandomMeal() {
    getRandomMeal().then((response) => {
      setIdMeal(response.idMeal);
    });
  }
  console.log(idMeal);
  console.log(idDrink);
  useEffect(() => {
    fetchRandomDrink();
    fetchRandomMeal();
  }, []);

  if (food) {
    return (
      <>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
            className="expl-btn"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button
            data-testid="explore-by-area"
            type="button"
            className="expl-btn"
          >
            Por Local de Origem
          </button>
        </Link>
        <Link to={ `/comidas/${idMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
            className="expl-btn"
          >
            Me Surpreenda!
          </button>
        </Link>
      </>
    );
  }
  return (
    <>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          id="ingredient"
          className="expl-btn"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to={ `/bebidas/${idDrink}` }>
        <button
          type="button"
          data-testid="explore-surprise"
          id="surprise"
          className="expl-btn"
        >
          Me Surpreenda!
        </button>
      </Link>
    </>
  );
}

ExploreButtons.propTypes = {
  food: PropTypes.bool,
}.isRequired;

export default ExploreButtons;
