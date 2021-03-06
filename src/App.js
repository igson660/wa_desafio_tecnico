import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Path from './Paths/index';
import Home from './Pages/Home';
import StartCancel from './Pages/StartCancel';
import Game from './Pages/Game';
import Checkout from './Pages/Checkout';
import Ranking from './Pages/Ranking'

function App() {
  return (
    <Switch>
      <Route exact path={ Path.homePage } component={ Home }/>
      <Route exact path={ Path.startCancelPage } component={ StartCancel }/>
      <Route exact path={ Path.gamePage } component={ Game }/>
      <Route exact path={ Path.checkoutPage } component={ Checkout }/>
      <Route exact path={ Path.rankingPage } component={ Ranking }/>

    </Switch>
  );
}

export default App;
