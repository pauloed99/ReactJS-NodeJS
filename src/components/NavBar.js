import React from 'react';
import {useSelector} from "react-redux";


export default function NavBar(){

    const state = useSelector((state)=>state.isLogged);

    return(
        <div className = "NavBar">
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
                        <li className="nav-item active ">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                        
                        <li className="nav-item mr-sm-2">
                            <a className="nav-link active" href="/login">Login</a>
                        </li>

                        {
                            !state.user ? (
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Ação</a>
                                        <a className="dropdown-item" href="#">Outra ação</a>
                                    <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Algo mais aqui</a>
                                    </div>
                                </li>
                            ) : null
                        }

                    </ul>
                   
                </div>
            </nav>
        </div>
    );
}