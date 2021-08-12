import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreButtons from '../components/ExploreButtons';

function ExploreFood() {
  return (
    <div>
      <Header canSearch={ false } text="Explorar Comidas" />
      <div className="expl-cont">
        <ExploreButtons food />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFood;
