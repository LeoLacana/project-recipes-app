import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

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
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" />
        <Route exact path="/bebidas" />
        <Route exact path="/comidas/:recipeId" />
        <Route exact path="/bebidas/:recipeId" />
        <Route exact path="/comidas/:recipeId/in-progress" />
        <Route exact path="/bebidas/:recipeId/in-progress" />
        <Route exact path="/explorar" />
        <Route exact path="/explorar/comidas" />
        <Route exact path="/explorar/bebidas" />
        <Route exact path="/explorar/comidas/ingredientes" />
        <Route exact path="/explorar/bebidas/ingredientes" />
        <Route exact path="/explorar/comidas/area" />
        <Route exact path="/perfil" />
        <Route exact path="/receitas-feitas" />
        <Route exact path="/receitas-favoritas" />
      </Switch>
    </div>
  );
}

export default App;
