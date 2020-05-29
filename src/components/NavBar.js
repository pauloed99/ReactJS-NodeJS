import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";



export default function NavBar(){

    const state = useSelector((state)=>state.isLogged);

    return(
        <div className = "NavBar">

            {
                !state.user ? (
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'dodgerBlue'}}>
                        <Link className="navbar-brand" to="/">Stadium Tour</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home<span className="sr-only">(página atual)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                
                                <li className="nav-item active">
                                    <Link className="nav-link " to="/login">Login</Link>
                                </li>

                            </ul>
                        
                        </div>
                    </nav>
                ) : (
                    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'dodgerBlue'}}>
                        <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                            <ul className="navbar-nav mr-auto">
                                <li class="nav-item dropdown active">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Seus dados pessoais
                                    </Link>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link class="dropdown-item" to="/dashboard/user">Ver Dados</Link>
                                        <Link class="dropdown-item" to="/dashboard/user/update">Alterar Dados</Link>
                                        <Link class="dropdown-item" to="/dashboard/user/passwordUpdate">Alterar Senha</Link>
                                    </div>
                                </li>
                                
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/dashboard/travels">Suas viagens programadas</Link>
                                </li>

                                <li className="nav-item active">
                                    <Link className="nav-link" to="/dashboard/travelRegister">Adicionar viagem na minha conta</Link>
                                </li>

                                <li class="nav-item dropdown active">
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Estádios
                                    </Link>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link class="dropdown-item" to="/dashboard/stadiumList">Lista de estádios</Link>
                                        <Link class="dropdown-item" to="/dashboard/stadiumList/info">mais sobre os estádios</Link>
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