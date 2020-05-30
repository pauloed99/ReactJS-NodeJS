import React from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/register';


export default function Register(props) {
  
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.register);
  const msgError = state.msgError;


  const fetchConfig = {
    method : 'POST',
    body : JSON.stringify(state),
    headers : new Headers({'Content-Type': 'application/json'})
  };
  
  async function signUp(e){
    try {
      e.preventDefault();
      var response = await fetch('http://localhost:4000/auth/register', fetchConfig);
      var data = await response.json();

      if(!data.error){
        localStorage.setItem('token', data.token);
        props.history.push('/dashboard');
      }else{
        dispatch(form.setMsgError(data.error));
      }

    } catch (error) {
      console.log(`Ocorreu um erro ao enviar os dados para registrar o usuário, erro : ${error}`);
    }

  }
  
  return (
    <div className = "Register">
      <NavBar />

      <div className="container mt-4">
        <h3>Cadastre-se no site preenchendo todos os campos abaixo !</h3>
        <hr />
      </div>  
    
      <div className="card container mt-4">
          <div className="card-body">
            <form>
                <label htmlFor="firstName">Nome : </label>
                <input className="form-control" type="text" id = "firstName" placeholder="Digite seu nome" 
                required onChange={(e) => dispatch(form.setFirstName(e.target.value))} />
                <label htmlFor="lastName">Sobrenome : </label>
                <input className="form-control" type="text" id = "lastName" placeholder="Digite seu sobrenome" 
                required onChange={(e) => dispatch(form.setLastName(e.target.value))} />
                <label htmlFor="cpf">CPF : </label>
                <input className="form-control" type="text" id = "cpf" placeholder="Digite seu CPF" 
                required onChange={(e) => dispatch(form.setCpf(e.target.value))} />
                <label htmlFor="email">Email : </label>
                <input className="form-control" type="email" id="email" placeholder="digite seu email" 
                required onChange={(e) => dispatch(form.setEmail(e.target.value))} /> 
                <label htmlFor="password">Senha : </label>
                <input className="form-control" type="password" id = "password" placeholder="Digite sua senha" 
                required onChange={(e) => dispatch(form.setPassword(e.target.value))} />
                <label htmlFor="password2">Repita a sua Senha : </label>
                <input className="form-control" type="password" id = "password2" placeholder="Digite sua senha" 
                required onChange={(e) => dispatch(form.setPassword2(e.target.value))} />
                <br />
                <button className="btn btn-success" onClick={signUp}>Sign up</button>
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

