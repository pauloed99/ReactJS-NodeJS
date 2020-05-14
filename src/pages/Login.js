import React from 'react';
import NavBar from '../components/NavBar';


export default function Login() {
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
                <label for="cpf">CPF : </label>
                <input className="form-control" type="text" id = "cpf" name="cpf" placeholder="Digite seu CPF" 
                required />
                <label for="password">Senha : </label>
                <input className="form-control" type="password" id = "password" name="password" placeholder="Digite sua senha" 
                required />
                <br />
                <input className="btn btn-success" type="submit" value="Sign in" />
            </form>
          </div>
      </div>
    </div>
  );
}

