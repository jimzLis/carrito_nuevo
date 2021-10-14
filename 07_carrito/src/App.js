import React, { Component } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Home } from './Components/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={Home}></Route>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App
