import React, { useEffect, useState } from 'react';
import './RecipesMain.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCats, fetchByAll, fetchByCat } from '../service/FetchAPIs';

const catsLimit = 5;

const RecipesMain = ({ type }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCats] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const cats = await fetchCats(type);
      setCats(cats);
      const results = await fetchByAll(type);
      setRecipes(results);
    };
    getRecipes();
  }, []);

  const renderCards = () => {
    const recipesLimit = 12;
    return recipes.slice(0, recipesLimit).map((r, i) => (
      type === 'comida'
        ? (
          <Link key={ r.idMeal } to={ `comidas/${r.idMeal}` }>
            <div data-testid={ `${i}-recipe-card` }>
              <span data-testid={ `${i}-card-name` }>{r.strMeal}</span>
              <img
                src={ r.strMealThumb }
                alt={ r.strMeal }
                className="recipe-img"
                data-testid={ `${i}-card-img` }
              />
            </div>
          </Link>)
        : (
          <Link key={ r.idDrink } to={ `bebidas/${r.idDrink}` }>
            <div data-testid={ `${i}-recipe-card` }>
              <span data-testid={ `${i}-card-name` }>{r.strDrink}</span>
              <img
                src={ r.strDrinkThumb }
                alt={ r.strDrink }
                className="recipe-img"
                data-testid={ `${i}-card-img` }
              />
            </div>
          </Link>)
    ));
  };

  const searchByCategory = async (event, cat) => {
    const { classList } = event.target;
    // if (classList.values.includes("select"))
    if (!Object.values(classList).includes('selected')) {
      console.log('Opa');
      const byCat = await fetchByCat(type, cat);
      setRecipes(byCat);
      const btns = document.querySelectorAll('.cat-btn');
      btns.forEach((btn) => {
        btn.classList.remove('selected');
      });
      classList.add('selected');
    } else {
      console.log('Wepa');
      const results = await fetchByAll(type);
      setRecipes(results);
      classList.remove('selected');
    }
  };

  const searchByAll = async () => {
    const btns = document.querySelectorAll('.cat-btn');
    btns.forEach((btn) => {
      btn.classList.remove('selected');
    });
    const results = await fetchByAll(type);
    setRecipes(results);
  };

  return (
    <div>
      <Header canSearch />
      <button
        type="submit"
        data-testid="All-category-filter"
        onClick={ searchByAll }
        className="cat-btn"
      >
        All
      </button>
      { categories.slice(0, catsLimit).map(({ strCategory }) => (
        <button
          type="submit"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ (event) => searchByCategory(event, strCategory) }
          className="cat-btn"
        >
          { strCategory }
        </button>
      )) }
      { recipes.length > 0 ? renderCards() : '' }
    </div>
  );
};

RecipesMain.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecipesMain;
