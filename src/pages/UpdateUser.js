import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import jwt_decode from 'jwt-decode';
import * as form from '../redux/actions/register';
import {useHistory} from 'react-router-dom';

export default function UpdateUser(){
    
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.register);
    const msgError = state2.msgError;
    const history = useHistory();
    

    const dispatch = useDispatch();


    useEffect(()=>{

        async function authorization(){
            try {
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

            } catch (error) {
                dispatch(setUser(null));
            }
                
        }

        authorization();
        
    }, []);

    async function update(e){
        try {
            e.preventDefault();
            const token = localStorage.getItem('token');
            const decoded = jwt_decode(token);
            const {email} = decoded;
           

            const fetchOptions = {
                method : 'PUT',
                body : JSON.stringify(state2),
                headers : new Headers({'Authorization' : `Bearer ${token}`, 
                'Content-Type': 'application/json'})
            };

            const response = await fetch(`http://localhost:4000/users/${email}`, fetchOptions);
            
            const data = await response.json();

            if(data.error)
                dispatch(form.setMsgError(data.error));
            else{
                localStorage.setItem('token', data.token);
                history.push('/dashboard') 
            }
                
        } catch (error) {
            dispatch(form.setMsgError("Não foi possível se conectar com o servidor"));
        }
        
    }
    
    if(!state.user){
        return(
            <div className="UpdateUser">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }

    
    return (
        <div className = "updateUser">
          <NavBar />
    
          <div className="container mt-4">
            <h3>Atualize seus dados, se necessário !</h3>
            <hr />
          </div>  
        
          <div className="card container mt-4">
              <div className="card-body">
                <form>
                    <label htmlFor="firstName">Nome : </label>
                    <input className="form-control" type="text" id = "firstName" placeholder="Digite seu nome" 
                    required defaultValue = {state.user.firstName}
                    onChange={(e) => dispatch(form.setFirstName(e.target.value))}/>
                    <label htmlFor="lastName">Sobrenome : </label>
                    <input className="form-control" type="text" id = "lastName" placeholder="Digite seu sobrenome" 
                    required defaultValue = {state.user.lastName}
                    onChange={(e) => dispatch(form.setLastName(e.target.value))} />
                    <label htmlFor="email">Email : </label>
                    <input className="form-control" type="email" id="email" placeholder="digite seu email" 
                    required defaultValue = {state.user.email}
                    onChange={(e) => dispatch(form.setEmail(e.target.value))} />
                    
                    <button className="btn btn-success mt-4" onClick={update}>Alterar dados</button> 
                    <br />
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