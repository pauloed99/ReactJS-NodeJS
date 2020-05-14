import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import { createStore } from "redux";
import {Provider} from "react-redux";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StadiumList from './pages/StadiumList';
import StadiumInfo from './pages/StadiumInfo';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/register" component = {Register} />
            <Route exact path = "/dashboard/stadiumList" component = {StadiumList} />
            <Route path = "/dashboard/stadiumList/info" component = {StadiumInfo} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
