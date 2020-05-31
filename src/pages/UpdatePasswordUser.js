import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import * as form from '../redux/actions/passwordUpdate';
import jwt_decode from 'jwt-decode';


export default function User(){
    
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.passwordUpdate);
    const msgError = state2.msgError;

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
                dispatch(setUser(data.user));    
            }
                
        } catch (error) {
            dispatch(form.setMsgError("Não foi possível se conectar com o servidor"));
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
            <h3>Modifique sua senha, se necessário !</h3>
            <hr />
          </div>  
        
          <div className="card container mt-4">
              <div className="card-body">
                <form>
                    <label htmlFor="password">Digite senha antiga : </label>
                    <input className="form-control" type="password" id = "password" 
                    required onChange={(e)=>dispatch(form.setPassword(e.target.value))} />
                    <label htmlFor="password2">Digite a sua nova senha : </label>
                    <input className="form-control" type="password" id = "password2" 
                    required onChange={(e)=>dispatch(form.setPassword2(e.target.value))} />
                    <label htmlFor="password3">Repita a sua nova senha : </label>
                    <input className="form-control" type="password" id="password3"  
                    required onChange={(e)=>dispatch(form.setPassword3(e.target.value))} /> 
                    <br />

                    <button className="btn btn-success" onClick={update}>Alterar Senha</button>
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