import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Path from './Paths/index';
import Home from './Pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path={ Path.homePage } component={ Home }/>
    </Switch>
  );
}

export default App;
