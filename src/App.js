import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Path from './Paths/index';
import Home from './Pages/Home';
import StartCancel from './Pages/StartCancel';

function App() {
  return (
    <Switch>
      <Route exact path={ Path.homePage } component={ Home }/>
      <Route exact path={ Path.startCancelPage } component={ StartCancel }/>
    </Switch>
  );
}

export default App;
