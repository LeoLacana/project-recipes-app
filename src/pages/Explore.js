import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <div>
        <Header canSearch={ false } text="Explorar" />
        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
            id="food"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            type="button"
            data-testid="explore-drinks"
            id="drink"
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
