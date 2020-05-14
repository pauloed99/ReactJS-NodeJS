import React from 'react';
import NavBar from '../components/NavBar';
import JumbotronFluid from '../components/JumbotronFluid';
import CarouselStadiumList from '../components/CarouselStadiumList';


export default function StadiumList(){
    return(
        <div className="StadiumList">
            <NavBar />
            <JumbotronFluid title = "album of stadiuns" 
            text = "Seja bem-vindo, nesta página você poderá ver quais estádios nosso site de viagens oferece para você poder visitar, bem como será mostrado sua localização, um pouco da história e outras informações para que você possa ter certeza da sua escolha !" />
            <CarouselStadiumList />
        </div>
    );
}