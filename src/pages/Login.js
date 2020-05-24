import React from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/register';


export default function Login(props) {

  const dispatch = useDispatch();
  const state = useSelector((state)=>state.register);
  const msgError = state.msgError;

  const fetchConfig = {
    method : 'POST',
    body : JSON.stringify(state),
    headers : new Headers({'Content-Type': 'application/json'})
  };

  async function signIn(e){
    try {
      e.preventDefault();
      var response = await fetch('http://localhost:4000/auth/login', fetchConfig);
      var data = await response.json();

      if(!data.error){
        localStorage.setItem('token', data.token);
        props.history.push('/dashboard');
      }else{
        dispatch(form.setMsgError(data.error));
      }
      
    } catch (error) {
      console.log(`Erro de autenticação do usuário, erro : ${error}`);
    }

  }

  return (
    <div className = "Login">
      <NavBar />

      <div className="container mt-4">
        <h3>Efetue o seu login para planejar sua viagem !</h3>
        <hr />
      </div>  
    
      <div className="card container mt-4">
          <div className="card-body">
            <form>
                <label for="email">Email : </label>
                <input className="form-control" type="email" id = "email" name="email" placeholder="Digite seu email" 
                required onChange={(e) => {dispatch(form.setEmail(e.target.value))}} />
                <label for="password">Senha : </label>
                <input className="form-control" type="password" id = "password" name="password" placeholder="Digite sua senha" 
                required onChange={(e) => {dispatch(form.setPassword(e.target.value))}} />
                <br />
                <button className="btn btn-success" onClick={signIn}>Sign in</button>
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
