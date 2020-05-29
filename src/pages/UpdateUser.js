import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import jwt_decode from 'jwt-decode';
import * as form from '../redux/actions/register';


export default function User(){
    
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.register);

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
            const token = localStorage.get('token');
            const decoded = jwt_decode(token);
            const {email} = decoded;

            const fetchOptions = {
                method : 'PUT',
                body : JSON.stringify(state2),
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch(`http://localhost:4000/users/${email}`, fetchOptions);

            const data = await response.json();

            localStorage.setItem('token', data.token);

            if(data.error)
                dispatch(setUser(null));

        } catch (error) {
            dispatch(setUser(null));
        }
        
    }
    
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
            <h3>Atualize seus dados, se necessário !</h3>
            <hr />
          </div>  
        
          <div className="card container mt-4">
              <div className="card-body">
                <form>
                    <label for="firstName">Nome : </label>
                    <input className="form-control" type="text" id = "firstName" placeholder="Digite seu nome" 
                    required value = {state.user.setFirstName}
                    onChange={(e) => form.setFirstName(e.target.value)}/>
                    <label for="lastName">Sobrenome : </label>
                    <input className="form-control" type="text" id = "lastName" placeholder="Digite seu sobrenome" 
                    required value = {state.user.setLastName}
                    onChange={(e) => form.setLastName(e.target.value)} />
                    <label for="email">Email : </label>
                    <input className="form-control" type="email" id="email" placeholder="digite seu email" 
                    required value = {state.user.setFirstName}
                    onChange={(e) => form.setEmail(e.target.value)} />

                    <button className = "btn btn-success" onClick={update}>Alterar dados</button> 
                    <br />
                </form>
              </div>
          </div>

        </div>
      );
}