import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import jwt_decode from 'jwt-decode';


export default function User(){
    
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
            <div className="User">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }


    
    return (
        <div className = "User">
          <NavBar />
    
          <div className="container mt-4">
            <h3>Abaixo estarão seus dados pessoais !</h3>
            <hr />
          </div>  
        
          <div className="card container mt-4">
              <div className="card-body">
                <form>
                    <label for="firstName">Nome : </label>
                    <input className="form-control" type="text" id = "firstName" placeholder="Digite seu nome" 
                    required  value = {state.user.firstName} disabled />
                    <label for="lastName">Sobrenome : </label>
                    <input className="form-control" type="text" id = "lastName" placeholder="Digite seu sobrenome" 
                    required  value = {state.user.lastName} disabled />
                    <label for="cpf">CPF : </label>
                    <input className="form-control" type="text" id = "cpf" placeholder="Digite seu CPF" 
                    required  value = {state.user.cpf} disabled />
                    <label for="email">Email : </label>
                    <input className="form-control" type="email" id="email" placeholder="digite seu email" 
                    required  value = {state.user.email} disabled /> 
                    <br />
                </form>
              </div>
          </div>

        </div>
      );
}