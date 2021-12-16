import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Path from './Paths/index';
import Home from './Pages/Home';
import StartCancel from './Pages/StartCancel';
import Game from './Pages/Game';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
  return (
    <Switch>
      <Route exact path={ Path.homePage } component={ Home }/>
      <Route exact path={ Path.startCancelPage } component={ StartCancel }/>
      <Route exact path={ Path.checkoutPage } component={ CheckoutPage }/>
      <Route exact path={ Path.Game } component={ Game }/>
    </Switch>
  );
}

export default App;
