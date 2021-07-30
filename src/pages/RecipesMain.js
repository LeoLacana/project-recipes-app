import React, { useEffect, useState } from 'react';
import './RecipesMain.css';
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
    return recipes.slice(0, recipesLimit).map((r) => (
      type === 'comida'
        ? (
          <div key={ r.idMeal }>
            <span>{r.strMeal}</span>
            <img src={ r.strMealThumb } alt={ r.strMeal } className="recipe-img" />
          </div>)
        : (
          <div key={ r.idDrink }>
            <span>{r.strDrink}</span>
            <img src={ r.strDrinkThumb } alt={ r.strDrink } className="recipe-img" />
          </div>)
    ));
  };

  const searchByCategory = async (cat) => {
    const byCat = await fetchByCat(type, cat);
    setRecipes(byCat);
  };

  return (
    <div>
      <Header canSearch />
      { categories.slice(0, catsLimit).map(({ strCategory }) => (
        <button
          type="submit"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ () => searchByCategory(strCategory) }
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
