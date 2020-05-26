import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/register';


export default function Dashboard(props){
    const state = useSelector((state)=>state.register);
    const dispatch = useDispatch();



    useEffect(()=>{

        async function authorization(){
            const token = localStorage.getItem('token');

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch('http://localhost:4000/auth/authorization', fetchOptions);
            const data = await response.json()

            if(data.error)
                dispatch(form.setIsLogged(false));
            else
                dispatch(form.setIsLogged(true));    
        }

        authorization();
        
    }, []);
    
    if(!state.isLogged){
        return(
            <div className="Dashboard">
                <h1>Loading...</h1>
            </div>
        );
    }
        
    else
        return(
            <div className="Dashboard">
                <NavBar />
            </div>
        );    
}