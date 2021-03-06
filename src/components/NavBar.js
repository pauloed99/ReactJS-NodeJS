import React from 'react';
import {useSelector} from "react-redux";




export default function NavBar(){

    const state = useSelector((state)=>state.isLogged);

    return(
        <div className="NavBar">

            {
                !state.user ? (
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'dodgerBlue'}}>
                        <a className="navbar-brand" href="/">Stadium Tour</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home<span className="sr-only">(página atual)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                
                                <li className="nav-item active">
                                    <a className="nav-link " href="/login">Login</a>
                                </li>

                            </ul>
                        
                        </div>
                    </nav>
                ) : (
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'dodgerBlue'}}>
                        <a className="navbar-brand" href="/dashboard">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Seus dados pessoais
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/dashboard/user">Ver Dados</a>
                                        <a className="dropdown-item" href="/dashboard/user/update">Alterar Dados</a>
                                        <a className="dropdown-item" href="/dashboard/user/passwordUpdate">Alterar Senha</a>
                                    </div>
                                </li>

                                <li className="nav-item active">
                                    <a className="nav-link" href="/dashboard/travelRegister">Adicionar viagem na minha conta</a>
                                </li>

                                <li className="nav-item dropdown active">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Estádios
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/dashboard/stadiumList">Lista de estádios</a>
                                        <a className="dropdown-item" href="/dashboard/stadiumList/info">mais sobre os estádios</a>
                                    </div>
                                </li>

                                <li className="nav-item active">
                                    <a className="nav-link" href="/logout">Logout</a>
                                </li>

                            </ul>
                        
                        </div>
                    </nav>
                )
            }
            
        </div>
    );
}