import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setTravel} from '../redux/actions/travel';
import {useHistory, useParams} from 'react-router-dom';
import * as form from '../redux/actions/travelRegister';


export default function TravelUpdate(){

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.travel);
    const state2 = useSelector((state)=>state.travelRegister);
    const msgError = state2.msgError;
    const history = useHistory();
    const {travelId} = useParams();

    useEffect(()=>{

        async function authorization(){
            try {
                const token = localStorage.getItem('token');

                const fetchOptions = {
                    method : 'GET',
                    headers : new Headers({'Authorization' : `Bearer ${token}`})
                };

                const response = await fetch(`http://localhost:4000/travels/${travelId}`, 
                fetchOptions);

                const data = await response.json();

                if(data.error)
                    dispatch(setTravel(null));
                else
                    dispatch(setTravel(data.travel));

            } catch (error) {
                dispatch(setTravel(null));
            }
                
        }

        authorization();
        
    }, []);

    async function updateTravel(e){
        try {
            e.preventDefault();
            const token = localStorage.getItem('token');
            
    
            const fetchOptions = {
                method : 'PUT',
                headers : new Headers({'Authorization' : `Bearer ${token}`, 
                'Content-Type': 'application/json'})
            };


            const response = await fetch(`http://localhost:4000/travels/${travelId}`, fetchOptions);
    
            const data = await response.json();

            if(data.error)
                dispatch(form.setMsgError(data.error));
            else    
                history.push('/dashboard');
               
        } catch (error) {
            dispatch(form.setMsgError("Não foi possível se conectar com o servidor"));
        }
        
    }
    
    if(!state.travel){
        return(
            <div className="TravelUpdate">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }

   
    return(
        <div className="TravelUpdate">
            <NavBar />
            <h2 className="mt-4">Altere, se desejar, os dados do registro abaixo</h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <form>
                        <label htmlFor="stadium">Estádio que você vai visitar : </label>
                        <select className="form-control" id="stadium" required
                        onChange={(e) => dispatch(form.setStadium(e.target.value))} >
                            <option>{state.travel.stadium}</option>
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
                            <option>{state.travel.country}</option>
                            <option>Argentina</option>
                            <option>Brasil</option>
                        </select>
                        <label htmlFor="city">Cidade de destino : </label>
                        <select className="form-control" id="city" required 
                        onChange={(e) => dispatch(form.setCity(e.target.value))} >
                            <option>{state.travel.city}</option>
                            <option>Fortaleza</option>
                            <option>Salvador</option>
                            <option>Santos</option>
                            <option>Rio de Janeiro</option>
                            <option>Porto Alegre</option>
                            <option>São Paulo</option>
                            <option>Buenos Aires</option>
                        </select>
                        <button className="btn btn-success mt-4" onClick={updateTravel}>Register</button>
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