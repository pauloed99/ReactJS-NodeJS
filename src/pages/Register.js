import React from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/register';


export default function Register() {
  
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.register);
  

  
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
                <label for="name">Nome : </label>
                <input className="form-control" type="text" id = "name" name="name" placeholder="Digite seu nome" 
                required onChange={(e) => dispatch(form.setName(e.target.value))} />
                <label for="lastName">Sobrenome : </label>
                <input className="form-control" type="text" id = "lastName" name="lastName" placeholder="Digite seu sobrenome" 
                required onChange={(e) => dispatch(form.setLastName(e.target.value))} />
                <label for="cpf">CPF : </label>
                <input className="form-control" type="text" id = "cpf" name="cpf" placeholder="Digite seu CPF" 
                required onChange={(e) => dispatch(form.setCpf(e.target.value))} />
                <label for="email">Email : </label>
                <input className="form-control" type="email" name="email" id="email" placeholder="digite seu email" 
                required onChange={(e) => dispatch(form.setEmail(e.target.value))} /> 
                <label for="password">Senha : </label>
                <input className="form-control" type="password" id = "password" name="password" placeholder="Digite sua senha" 
                required onChange={(e) => dispatch(form.setPassword(e.target.value))} />
                <label for="password2">Repita a sua Senha : </label>
                <input className="form-control" type="password" id = "password2" name="password2" placeholder="Digite sua senha" 
                required onChange={(e) => dispatch(form.setPassword2(e.target.value))} />
                <br />
                <button className="btn btn-success" type="submit">Sign up</button>
            </form>
          </div>
      </div>
    </div>
  );
}

