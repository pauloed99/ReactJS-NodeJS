import React from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/register';


export default function Login() {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.register);

  console.log(data.email);

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
                <input className="btn btn-success" type="submit" value="Sign in" />
            </form>
          </div>
      </div>
    </div>
  );
}
