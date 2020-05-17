import React from 'react';
import NavBar from '../components/NavBar';


export default function Register() {
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
                required />
                <label for="name">Sobrenome : </label>
                <input className="form-control" type="text" id = "name" name="name" placeholder="Digite seu sobrenome" 
                required />
                <label for="cpf">CPF : </label>
                <input className="form-control" type="text" id = "cpf" name="cpf" placeholder="Digite seu CPF" 
                required />
                <label for="email">Email : </label>
                <input className="form-control" type="email" name="email" id="email" placeholder="digite seu email" 
                required /> 
                <label for="password">Senha : </label>
                <input className="form-control" type="password" id = "password" name="password" placeholder="Digite sua senha" 
                required />
                <label for="password2">Repita a sua Senha : </label>
                <input className="form-control" type="password" id = "password2" name="password2" placeholder="Digite sua senha" 
                required />
                <br />
                <button className="btn btn-success" type="submit">Sign up</button>
            </form>
          </div>
      </div>
    </div>
  );
}

