import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import {useSelector,useDispatch} from "react-redux";
import {setUser} from '../redux/actions/isLogged';
import JumbotronFluid from '../components/JumbotronFluid';
import jwt_decode from 'jwt-decode';
import {setTravels} from '../redux/actions/travels';


export default function Dashboard(){
    const state = useSelector((state)=>state.isLogged);
    const state2 = useSelector((state)=>state.travels);
    const dispatch = useDispatch();


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

    async function showTravels(e){
        try {
            e.preventDefault();
            const token = localStorage.getItem('token');

            const fetchOptions = {
                method : 'GET',
                headers : new Headers({'Authorization' : `Bearer ${token}`})
            }

            const response = await fetch('http://localhost:4000/travels', fetchOptions);

            const data = await response.json();

            if(data.error)
                dispatch(setTravels(null));
            else
                dispatch(setTravels(data.travels));    
        
        } catch (error) {
            
        }
    }

    
    if(!state.user){
        return(
            <div className="Dashboard">
                <h1>Você não tem autorização para acessar essa página !</h1>
            </div>
        );
    }

        
    else
        return(
            <div className="Dashboard">
                <NavBar />
                <JumbotronFluid title = {`Bem-vindo Sr(a). ${state.user.firstName}
                ${state.user.lastName} !`} text={`Navegue pela barra de navegação acima para 
                descobrir os estádio que oferecemos para você visitá-los e reserve suas viagens`} 
                />

                <button className="btn btn-success mt-4" onClick={showTravels}>
                    Mostrar suas viagens cadastradas
                </button>

                <hr />

                {
                    !state2.travels ? null : (
                        state2.travels.map(travel => (
                            <div key={travel.travel_id} className="card w-75 mt-4 container">
                                <div className="card-body">
                                    <h5 className="card-title">Travel details</h5>
                                    <p className="card-text">Travel id : {travel.travel_id}</p>
                                    <p className="card-text">Stadium : {travel.stadium}</p>
                                    <p className="card-text">Country : {travel.country}</p>
                                    <p className="card-text">City : {travel.city}</p>
                                    <p className="card-text">CPF User : {travel.cpf_user}</p>
                                    <a href={`/dashboard/travelUpdate/${travel.travel_id}`} 
                                    className="btn btn-success">
                                        Alterar
                                    </a>
                                    <a className="btn btn-danger ml-4" 
                                    href={`/dashboard/travelDelete/${travel.travel_id}`} >
                                        Deletar
                                    </a>
                                </div>
                            </div>
                        ))
                    )
                }
                
            </div>
        );    
}