import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { FirstPage, SecondPage } from './pages';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/first' component={FirstPage} />
        <Route exact path='/second' component={SecondPage} />
        <Redirect to='/first' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
