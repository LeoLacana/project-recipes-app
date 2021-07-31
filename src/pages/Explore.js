import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Explore() {
  return (
    <div>
      <div>

        <Link to="/explorar/comidas">
          <button
            type="button"
            data-testid="explore-food"
            id="food"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas/">
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
