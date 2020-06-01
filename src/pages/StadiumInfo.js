import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Accordion from '../components/Accordion';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../redux/actions/isLogged';
import jwt_decode from 'jwt-decode';

export default function StadiumInfo(){
    
    const state = useSelector((state)=>state.isLogged);
    const dispatch = useDispatch();

    useEffect(()=>{

        async function authorization(){
            const token = localStorage.getItem('token');
            const decoded = jwt_decode(token);
            const {email} = decoded;

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch(`http://localhost:4000/users/${email}`, fetchOptions);
            
    
            const data = await response.json();

            if(data.error)
                dispatch(setUser(null));
            else
                dispatch(setUser(data.user));    
        }

        authorization();
        
    }, []);
    
    if(!state.user){
        return(
            <div className="StadiumInfo">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }
    
    return(
        <div className="StadiumInfo">
            <NavBar />
            <h2 className="mt-4">Mais detalhes sobre os estádios</h2>
            <hr />        
            <Accordion />
        </div>
    );
}