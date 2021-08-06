import React, { useEffect, useState } from 'react';
import './FavoriteRecipes.css';
import BtnShare from '../components/BtnShare';
import BtnFavorite from '../components/BtnFavorite';

const FavoriteRecipes = () => {
  const [favRecipes, setFavs] = useState([]);
  useEffect(() => {
    const getFavs = async () => {
      const favRecps = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (favRecps) {
        setFavs(favRecps);
      }
    };
    getFavs();
  }, []);
  console.log(favRecipes);
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
        <div key={ r.name }>
          <img
            src={ r.image }
            alt={ r.name }
            className="fav-pic"
            data-testid={ `${i}-horizontal-image` }
          />
          <h4 data-testid={ `${i}-horizontal-name` }>{ r.name }</h4>
          <h5 data-testid={ `${i}-horizontal-top-text` }>{ adtionalInfo }</h5>
          <BtnFavorite
            recipe={ recpObj }
            type={ `${r.type}s` }
            recipeId={ r.id }
            listIndex={ i }
            setFavs={ setFavs }
          />
          <BtnShare endPoint={ endP } listIndex={ i } />
        </div>);
    })
  );
  return (
    <div>
      {renderFavCards()}
    </div>
  );
};

export default FavoriteRecipes;
