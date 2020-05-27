import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import * as form from '../redux/actions/register';

export default function User(){
    
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.register);
    const dispatch = useDispatch();
    const msgError = state.msgError;

    alert(state.user.email)

    useEffect(()=>{

        async function authorization(){
            const token = localStorage.getItem('token');

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch('http://localhost:4000/auth/dashboard', fetchOptions);
            
            const data = await response.json();

            const response2 = await fetch(`http://localhost:4000/users/${data.user.email}`, fetchOptions);

            const data2 = await response2.json();

            if(data2.error)
                dispatch(setUser(null));
            else
                dispatch(form.setEmail(data.user.email));    
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
                    required  />
                    <label for="lastName">Sobrenome : </label>
                    <input className="form-control" type="text" id = "lastName" placeholder="Digite seu sobrenome" 
                    required  />
                    <label for="cpf">CPF : </label>
                    <input className="form-control" type="text" id = "cpf" placeholder="Digite seu CPF" 
                    required  />
                    <label for="email">Email : </label>
                    <input className="form-control" type="email" id="email" placeholder="digite seu email" 
                    required  /> 
                    <label for="password">Senha : </label>
                    <input className="form-control" type="password" id = "password" placeholder="Digite sua senha" 
                    required  />
                    <label for="password2">Repita a sua Senha : </label>
                    <input className="form-control" type="password" id = "password2" placeholder="Digite sua senha" 
                    required  />
                    <br />
                    <button className="btn btn-success">Sign up</button>
                </form>
              </div>
          </div>
          {
            !msgError ? null : (
            <p className="container alert alert-danger mt-4">{msgError}</p>
            )
          }
        </div>
      );
}