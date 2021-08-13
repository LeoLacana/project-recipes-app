import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import RecipesMain from './pages/RecipesMain';
import RecipesDetails from './pages/RecipeDetails';
import FavoriteRecipes from './pages/FavoriteRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import pages from './pages/index';
import InProgressRecipes from './pages/InProgressRecipes';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route
          exact
          path="/comidas"
          render={ () => <RecipesMain type="comidas" /> }
        />
        <Route
          exact
          path="/bebidas"
          render={ () => <RecipesMain type="bebidas" /> }
        />
        <Route
          exact
          path="/comidas/:recipeId"
          render={ (props) => <RecipesDetails { ...props } type="comidas" /> }
        />
        <Route
          exact
          path="/bebidas/:recipeId"
          render={ (props) => <RecipesDetails { ...props } type="bebidas" /> }
        />
        <Route
          exact
          path="/comidas/:recipeId/in-progress"
          render={ () => <InProgressRecipes type="comidas" /> }
        />
        <Route
          exact
          path="/bebidas/:recipeId/in-progress"
          render={ () => <InProgressRecipes type="bebidas" /> }
        />
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
        <Route exact path="/explorar/bebidas/area" component={ pages.NotFound } />
        <Route exact path="/perfil" component={ pages.Profile } />
        <Route exact path="/receitas-feitas" component={ pages.RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </div>
  );
}

export default App;
