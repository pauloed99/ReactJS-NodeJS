import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './index.css';
import { createStore } from "redux";
import {Provider} from "react-redux";
import {rootReducer} from './redux/reducers/rootReducer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StadiumList from './pages/StadiumList';
import StadiumInfo from './pages/StadiumInfo';
import TravelRegister from './pages/TravelRegister';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './auth/PrivateRoute';


const store = createStore(rootReducer);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/login" component = {Login} />
            <Route path = "/register" component = {Register} />
            <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
            <PrivateRoute exact path = "/dashboard/stadiumList" component = {StadiumList} />
            <PrivateRoute path = "/dashboard/stadiumList/info" component = {StadiumInfo} />
            <PrivateRoute path = "/dashboard/travel-register" component = {TravelRegister} />
          </Switch>
        </BrowserRouter>
      </Provider>  
    </div>
  );
}


