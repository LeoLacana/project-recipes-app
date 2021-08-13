import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getArea, getMealsByArea, getRecomendation } from '../services/RequestRandom';

function PlaceFood() {
  const [options, setOptions] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getArea().then((response) => {
      setOptions(response);
    });
    getRecomendation().then((data) => {
      setMeals(data);
    });
  }, []);
  console.log(options);
  console.log(meals);

  function mealsByArea(event) {
    if (event.target.value === 'All') {
      getRecomendation().then((data) => {
        setMeals(data);
      });
    } else {
      getMealsByArea(event.target.value).then((data) => {
        setMeals(data);
      });
    }
  }

  return (
    <div>
      <Header canSearch text="Explorar Origem" type="comidas" />
      <div className="slct-cont">
        <select
          data-testid="explore-by-area-dropdown"
          onChange={ mealsByArea }
          className="slct-orgn"
        >
          <option
            value="All"
            data-testid="All-option"
          >
            All
          </option>
          {options.map((option, index) => (
            <option
              data-testid={ `${option.strArea}-option` }
              value={ option.strArea }
              key={ index }
            >
              {option.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="cards-cont">
        {meals.slice(0, Number('12')).map((meal, index) => (
          <Link
            to={ `/comidas/${meal.idMeal}` }
            key={ meal.idMeal }
          >
            <div data-testid={ `${index}-recipe-card` } className="recipe-card">
              <span data-testid={ `${index}-card-name` }>{meal.strMeal}</span>
              <img
                className="recipe-img "
                // style={ { width: 80 } }
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default PlaceFood;
