import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import JumbotronFluid from '../components/JumbotronFluid';


export default function Dashboard(){
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
        
    else
        return(
            <div className="Dashboard">
                <NavBar />
                <JumbotronFluid title = {`Bem-vindo Sr(a). ${state.user.firstName}
                ${state.user.lastName} !`} text={`Navegue pela barra de navegação acima, para 
                descobrir os estádio que oferecemos para você visitá-los e reserve suas viagens`} 
                />
            </div>
        );    
}