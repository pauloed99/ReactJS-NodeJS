import React from 'react';
import NavBar from '../components/NavBar';
import Accordion from '../components/Accordion';

export default function StadiumInfo(){
    return(
        <div className="StadiumInfo">
            <NavBar />
            <h2 className="mt-4">Mais detalhes sobre os estádios</h2>
            <hr />        
            <Accordion />
        </div>
    );
}