import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import * as form from '../redux/actions/travelRegister';
import {setUser} from '../redux/actions/isLogged';


export default function TravelRegister(){

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.travelRegister);

    const state2 = useSelector((state)=>state.isLogged);


    useEffect(()=>{

        async function authorization(){
            const token = localStorage.getItem('token');

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            };

            const response = await fetch('http://localhost:4000/auth/dashboard', fetchOptions);
            
    
            const data = await response.json();

            if(data.error)
                dispatch(setUser(null));
            else
                dispatch(setUser(data.user));    
        }

        authorization();
        
    }, []);
    
    if(!state.user){
        return(
            <div className="Dashboard">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }


    return(
        <div className="TravelRegister">
            <NavBar />
            <h2 className="mt-4">Cadastre e agende suas viagens para visitar os estádios de sua preferência !</h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <form>
                        <label for="stadium">Estádio que você vai visitar : </label>
                        <select className="form-control" id="stadium" name="stadium" 
                        onChange={(e) => dispatch(form.setStadium(e.target.value))} required >
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
                        <label for="country">País de destino : </label>
                        <select className="form-control" id="country" name="country" 
                        onChange={(e) => dispatch(form.setCountry(e.target.value))} required >

                            {
                                state.stadium == 'Arena castelão'
                            }
                            <option></option>
                            <option>Brasil</option>
                            <option>Argentina</option>
                        </select>
                        <label for="city">Cidade de destino : </label>
                        <select className="form-control" id="city" name="city" 
                        onChange={(e) => dispatch(form.setCity(e.target.value))} required >
                            <option></option>
                            <option>Fortaleza</option>
                            <option>Salvador</option>
                            <option>Santos</option>
                            <option>Rio de Janeiro</option>
                            <option>Porto Alegre</option>
                            <option>São Paulo</option>
                            <option>Buenos Aires</option>
                        </select>
                        <button className="btn btn-success mt-4" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}