import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import pages from './pages/index';
import Header from './components/Header';

function App() {
  return (
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
      <Header canSearch />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ pages.Food } />
        <Route exact path="/bebidas" component={ pages.Drinks } />
        <Route exact path="/comidas/:recipeId" />
        <Route exact path="/bebidas/:recipeId" />
        <Route exact path="/comidas/:recipeId/in-progress" />
        <Route exact path="/bebidas/:recipeId/in-progress" />
        <Route exact path="/explorar" component={ pages.Explore } />
        <Route exact path="/explorar/comidas" component={ pages.ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ pages.ExploreDrinks } />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ pages.FoodByIngredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ pages.DrinksByIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ pages.PlaceFood } />
        <Route exact path="/perfil" component={ pages.Profile } />
        <Route exact path="/receitas-feitas" />
        <Route exact path="/receitas-favoritas" />
      </Switch>
    </div>
  );
}

export default App;
