import React from 'react';
import './Explore.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <Header canSearch={ false } text="Explorar" />
      <div className="expl-cont">
        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
            id="food"
            className="expl-btn"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-drinks"
            id="drink"
            className="expl-btn"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Explore;
