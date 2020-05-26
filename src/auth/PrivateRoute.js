import React from 'react';
import {Route, Redirect} from "react-router-dom";
import isAuthenticated from './isAuthenticated';



export default function PrivateRoute({component : Component, ...rest}){
    
    return(
        <Route {...rest} render={(props) => 
            isAuthenticated() ? <Component /> : <Redirect to={{pathname : '/', 
            state : {from : props.location}}}/>
        }/>
    )
    
}
