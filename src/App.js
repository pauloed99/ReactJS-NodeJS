import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import Home from './pages/Home';
import Login from './pages/Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/login" component = {Login} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
