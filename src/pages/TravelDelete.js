import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setTravel} from '../redux/actions/travel';
import {useHistory, useParams} from 'react-router-dom';
import {setMsgError} from '../redux/actions/travelRegister';


export default function TravelDelete(){

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

    async function deleteTravel(e){
        try {
            e.preventDefault();
            const token = localStorage.getItem('token');
            
    
            const fetchOptions = {
                method : 'DELETE',
                headers : new Headers({'Authorization' : `Bearer ${token}`, 
                'Content-Type': 'application/json'})
            };


            const response = await fetch(`http://localhost:4000/travels/${travelId}`, fetchOptions);
    
            const data = await response.json();

            if(data.error)
                dispatch(setMsgError(data.error));
            else    
                history.push('/dashboard');
               
        } catch (error) {
            dispatch(setMsgError("Não foi possível se conectar com o servidor"));
        }
        
    }
    
    if(!state.travel){
        return(
            <div className="TravelDelete">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }

   
    return(
        <div className="TravelDelete">
            <NavBar />
            <h2 className="mt-4">Delete, se desejar, os dados do registro abaixo</h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <form>
                        <label htmlFor="stadium">Estádio : </label>
                        <input type="text" className="form-control" id="stadium" required
                        value={state.travel.stadium} readOnly/>
                           
                        <label htmlFor="country">País de destino : </label>
                        <input type="text" className="form-control" id="country" required
                        value={state.travel.country} readOnly/>

                        <label htmlFor="city">Cidade de destino : </label>
                        <input type="text" className="form-control" id="city" required 
                        value={state.travel.city} readOnly/>

                        <button className="btn btn-success mt-4" onClick={deleteTravel}>Deletar</button>
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