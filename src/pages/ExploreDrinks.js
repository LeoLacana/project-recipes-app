import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreButtons from '../components/ExploreButtons';

function ExploreDrinks() {
  return (
    <div>
      <Header canSearch={ false } text="Explorar Bebidas" />
      <div className="expl-cont">
        <ExploreButtons />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
