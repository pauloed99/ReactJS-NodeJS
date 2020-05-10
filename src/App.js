import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import * as page from './pages/Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {page.Home} />
            <Route exact path = "/login" component = {page.Login} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
