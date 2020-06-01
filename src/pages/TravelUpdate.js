import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/travelRegister';
import {setUser} from '../redux/actions/isLogged';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';


export default function TravelRegister(props){

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.travelRegister);
    const msgError = state2.msgError;
    const history = useHistory();

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
    
            const fetchOptions = {
                method : 'PUT',
                body : JSON.stringify(state2),
                headers : new Headers({'Authorization' : `Bearer ${token}`, 
                'Content-Type': 'application/json'})
            };

            const response = await fetch('http://localhost:4000/users/travels', fetchOptions);
            
            const data = await response.json();

            if(data.error)
                dispatch(form.setMsgError(data.error));
            else    
                history.push('/dashboard');
               
        } catch (error) {
            dispatch(form.setMsgError("Não foi possível se conectar com o servidor"));
        }
        
    }
        
    
    if(!state.user){
        return(
            <div className="TravelUpdate">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }


    return(
        <div className="TravelUpdate">
            <NavBar />
            <h2 className="mt-4">Altere dados das suas viagens !</h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <form>
                        <label htmlFor="stadium">Estádio : </label>
                        <select className="form-control" id="stadium" required
                        onChange={(e) => dispatch(form.setStadium(e.target.value))} >
                            <option></option>
                            <option>Arena Castelão</option>
                            <option>Arena Fonte Nova</option>
                            <option>Estádio Maracanã</option>
                            <option>Estádio Mineirão</option>
                            <option>Estádio Beira-Rio</option>
                            <option>Estádio São Januário</option>
                            <option>Estádio Vila Belmiro</option>
                            <option>Estádio La Bombonera</option>
                            <option>Estádio Monumental de Núñez</option>
                            <option>Estádio Libertadores de América</option>
                            <option>Estádio El Cilindro</option>
                        </select>
                        <label htmlFor="country">País de destino : </label>
                        <select className="form-control" id="country" required
                        onChange={(e) => dispatch(form.setCountry(e.target.value))} >
                            <option></option>
                            <option>Argentina</option>
                            <option>Brasil</option>
                        </select>
                        <label htmlFor="city">Cidade de destino : </label>
                        <select className="form-control" id="city" required 
                        onChange={(e) => dispatch(form.setCity(e.target.value))} >
                            <option></option>
                            <option>Fortaleza</option>
                            <option>Salvador</option>
                            <option>Santos</option>
                            <option>Rio de Janeiro</option>
                            <option>Porto Alegre</option>
                            <option>São Paulo</option>
                            <option>Buenos Aires</option>
                        </select>
                        <button className="btn btn-success mt-4" onClick={update}>Register</button>
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