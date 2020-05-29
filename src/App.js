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
import Logout from './pages/Logout';
import User from './pages/User';
import Travel from './pages/Travel';
import UpdateUser from './pages/UpdateUser';
import UpdatePasswordUser from './pages/UpdatePasswordUser';


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
            <Route path = "/logout" component = {Logout} />
            <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
            <PrivateRoute exact path = "/dashboard/stadiumList" component = {StadiumList} />
            <PrivateRoute path = "/dashboard/stadiumList/info" component = {StadiumInfo} />
            <PrivateRoute path = "/dashboard/travelRegister" component = {TravelRegister} />
            <PrivateRoute exact path = "/dashboard/user" component = {User} />
            <PrivateRoute path = "/dashboard/user/update" component = {UpdateUser} />
            <PrivateRoute path = "/dashboard/user/passwordUpdate" component = {UpdatePasswordUser} />
            <PrivateRoute path = "/dashboard/travels" component = {Travel} />
          </Switch>
        </BrowserRouter>
      </Provider>  
    </div>
  );
}


