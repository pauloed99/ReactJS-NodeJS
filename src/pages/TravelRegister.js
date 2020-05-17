import React from 'react';
import NavBar from '../components/NavBar';

export default function TravelRegister(){
    return(
        <div className="TravelRegister">
            <NavBar />
            <h2 className="mt-4">Cadastre e agende suas viagens para visitar os estádios de sua preferência !</h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <form>
                        <label for="stadium">Estádio que você vai visitar : </label>
                        <select className="form-control" id="stadium" name="stadium">
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
                        <select className="form-control" id="country" name="country">
                            <option>Brasil</option>
                            <option>Argentina</option>
                        </select>
                        <label for="city">Cidade de destino : </label>
                        <select className="form-control" id="city" name="city">
                            <option>Fortaleza</option>
                            <option>Salvador</option>
                            <option>Santos</option>
                            <option>Rio de Janeiro</option>
                            <option>Porto Alegre</option>
                            <option>São Paulo</option>
                            <option>Buenos Aires</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    );
}