import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

let recipeMockUp = {
  id: '',
  type: '',
  area: '',
  category: '',
  alcoholicOrNot: '',
  name: '',
  image: '',
};

const BtnFavorite = ({ recipe, type, recipeId }) => {
  const { strCategory, strArea, strAlcoholic } = recipe;
  recipeMockUp = type === 'comidas'
    ? {
      id: recipeId,
      type: 'comida',
      area: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    }
    : {
      id: recipeId,
      type: 'bebida',
      area: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
  const [isFav, setAsFav] = useState(false);
  const findByIdArray = (array) => array.find(({ id }) => id === recipeId);
  useEffect(() => {
    const setIfDone = async () => {
      const favRecps = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (favRecps && findByIdArray(favRecps)) {
        setAsFav(true);
      }
    };
    setIfDone();
  }, []);

  const saveAsFav = () => {
    const favRecps = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favRecps) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favRecps, recipeMockUp]));
    } else localStorage.setItem('favoriteRecipes', JSON.stringify([recipeMockUp]));
    setAsFav(true);
  };

  const removeFromFav = () => {
    const favRecps = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favRecps) {
      const newFavs = favRecps.filter(({ id }) => id !== recipeId);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...newFavs]));
    }
    setAsFav(false);
  };

  const changeFav = (event) => {
    event.preventDefault();
    console.log(recipeId);
    if (isFav) removeFromFav();
    else saveAsFav();
  };

  return (
    <button
      type="submit"
      onClick={ (event) => changeFav(event) }
    >
      <img
        src={ isFav ? blackHeartIcon : whiteHeartIcon }
        alt="btn-favorite"
        data-testid="favorite-btn"
      />
    </button>
  );
};

BtnFavorite.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default BtnFavorite;
