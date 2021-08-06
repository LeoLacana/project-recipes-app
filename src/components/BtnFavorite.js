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

const BtnFavorite = ({ recipe, type, recipeId, listIndex, setFavs }) => {
  const { strCategory, strArea, strAlcoholic } = recipe;
  const testId = typeof listIndex === 'number'
    ? `${listIndex}-horizontal-favorite-btn` : 'favorite-btn';
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
  const getLocal = () => JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [isFav, setAsFav] = useState(false);
  const findByIdArray = (array) => array.find(({ id }) => id === recipeId);
  useEffect(() => {
    const setIfDone = async () => {
      const favRecps = getLocal();
      if (favRecps && findByIdArray(favRecps)) {
        setAsFav(true);
      }
    };
    setIfDone();
  }, []);

  const saveAsFav = (favRecps) => {
    if (favRecps) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favRecps, recipeMockUp]));
    } else localStorage.setItem('favoriteRecipes', JSON.stringify([recipeMockUp]));
    setAsFav(true);
  };

  const removeFromFav = (favRecps) => {
    if (favRecps) {
      const newFavs = favRecps.filter(({ id }) => id !== recipeId);
      localStorage.setItem('favoriteRecipes', JSON.stringify([...newFavs]));
    }
    setAsFav(false);
    setFavs(getLocal());
  };

  const changeFav = (event) => {
    event.preventDefault();
    const favRecps = getLocal();
    if (isFav) removeFromFav(favRecps);
    else saveAsFav(favRecps);
  };

  return (
    <button
      type="submit"
      onClick={ (event) => changeFav(event) }
    >
      <img
        src={ isFav ? blackHeartIcon : whiteHeartIcon }
        alt="btn-favorite"
        data-testid={ testId }
      />
    </button>
  );
};

BtnFavorite.propTypes = {
  type: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  recipeId: PropTypes.string.isRequired,
  listIndex: PropTypes.number,
  setFavs: PropTypes.func,
};
BtnFavorite.defaultProps = {
  listIndex: null,
  setFavs: () => '',
};

export default BtnFavorite;
