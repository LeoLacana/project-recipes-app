import React from 'react';
import { useHistory } from 'react-router';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import '../pages/footerStyle.css';

function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer" className="footer-menu">
      <button
        onClick={ () => history.push('/bebidas') }
        data-testid="drinks-bottom-btn"
        type="button"
        className="main-buttons"
        src="drinkIcon"
      >
        <img src={ drinkIcon } alt="drinks" />
      </button>
      <button
        onClick={ () => history.push('/explorar') }
        data-testid="explore-bottom-btn"
        type="button"
        className="main-buttons"
        src="exploreIcon"
      >
        <img src={ exploreIcon } alt="explore" />
      </button>
      <button
        onClick={ () => history.push('/comidas') }
        data-testid="food-bottom-btn"
        type="button"
        className="main-buttons"
        src="mealIcon"
      >
        <img src={ mealIcon } alt="food" />
      </button>
    </footer>
  );
}

export default Footer;
