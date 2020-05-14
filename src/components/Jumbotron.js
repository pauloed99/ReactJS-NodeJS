import React from 'react';

export default function Jumbotron() {
  return (
    <div className = "Jumbotron container">
        <h1 className="display-4">Seja Bem-vindo, ao nosso Site de viagens para conhecer estádios de futebol !</h1>
        <hr className = "my-4"/>
        <p className="lead">Neste Site, Você poderá agendar suas viagens por um pequeno preço para 
        conhecer vários dos estádios mais populares ao redor 
        do mundo, não perca esta chance !</p>
        <hr className="my-4" />
        <p>Para saber mais detalhes, crie sua conta e veja os estádios, bem como sua história, localização,
        disponíveis para visitar e agende sua viagem, clique no botão abaixo para 
        registrar-se!</p>
        <a className="btn btn-primary btn-lg" href="/register" role="button">Registre sua conta !</a>
    </div>
  );
}

