import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FavoriteAndMadeRecipes.css';
import Header from '../components/Header';
import BtnShare from '../components/BtnShare';
import BtnFavorite from '../components/BtnFavorite';

const FavoriteRecipes = () => {
  const [favRecipes, setFavs] = useState([]);
  const getLocal = () => JSON.parse(localStorage.getItem('favoriteRecipes'));
  useEffect(() => {
    const getFavs = async () => {
      const favRecps = getLocal();
      if (favRecps) {
        setFavs(favRecps);
      }
    };
    getFavs();
  }, []);

  const filterBy = (filtType) => {
    const favRecps = getLocal();
    if (favRecps) {
      switch (filtType) {
      case 'food': {
        const byFood = favRecps.filter(({ type }) => type === 'comida');
        setFavs(byFood);
        break;
      }
      case 'drink': {
        const byDrink = favRecps.filter(({ type }) => type === 'bebida');
        setFavs(byDrink);
        break;
      }
      default:
        setFavs(favRecps);
        break;
      }
    }
  };

  const renderFavCards = () => (
    favRecipes.map((r, i) => {
      const recpObj = r.type === 'comida'
        ? {
          strMeal: r.name,
          strMealThumb: r.image,
          strArea: r.area,
          strCategory: r.category,
        }
        : {
          strDrink: r.name,
          strDrinkThumb: r.image,
          strAlcoholic: r.alcoholicOrNot,
          strCategory: r.category,
        };
      const adtionalInfo = r.type === 'comida'
        ? `${r.area} - ${r.category}` : r.alcoholicOrNot;
      const endP = r.type === 'comida' ? `/comidas/${r.id}` : `/bebidas/${r.id}`;
      return (
        <div key={ r.name } className="fav-cont">
          <div className="fav-info">
            <Link to={ endP }>
              <div className="fav-card">
                <img
                  src={ r.image }
                  alt={ r.name }
                  className="fav-pic"
                  data-testid={ `${i}-horizontal-image` }
                />
                <span data-testid={ `${i}-horizontal-name` }>{ r.name }</span>
              </div>
            </Link>
            <div className="side-info">
              <h5 data-testid={ `${i}-horizontal-top-text` }>{ adtionalInfo }</h5>
            </div>
          </div>
          <div className="btn-container">
            <BtnShare endPoint={ endP } listIndex={ i } />
            <BtnFavorite
              recipe={ recpObj }
              type={ `${r.type}s` }
              recipeId={ r.id }
              listIndex={ i }
              setFavs={ setFavs }
            />
          </div>
          <hr />
        </div>);
    })
  );
  return (
    <div>
      <Header canSearch={ false } text="Receitas Favoritas" />
      <div className="filt-fav">
        <button
          type="submit"
          onClick={ () => filterBy('all') }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="submit"
          onClick={ () => filterBy('food') }
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="submit"
          onClick={ () => filterBy('drink') }
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      {renderFavCards()}
    </div>
  );
};

export default FavoriteRecipes;
