import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import JumbotronFluid from '../components/JumbotronFluid';
import CarouselStadiumList from '../components/CarouselStadiumList';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../redux/actions/isLogged';

export default function StadiumList(){
    
    const state = useSelector((state)=>state.isLogged);
    const dispatch = useDispatch();

    useEffect(()=>{

        async function authorization(){
            const token = localStorage.getItem('token');

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch('http://localhost:4000/auth/dashboard', fetchOptions);
            
    
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
            <div className="Dashboard">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }
    
    return(
        <div className="StadiumList">
            <NavBar />
            <JumbotronFluid title = "album of stadiuns" 
            text = "Seja bem-vindo, nesta página você poderá ver quais estádios nosso site de viagens oferece para você poder visitar, bem como será mostrado sua localização, um pouco da história e outras informações para que você possa ter certeza da sua escolha !" />
            <CarouselStadiumList />
        </div>
    );
}