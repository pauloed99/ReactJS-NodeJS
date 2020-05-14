import React from 'react';

export default function CarouselStadiumList(){
    return (
        <div className="CarouselStadiumList">
            <div className="Carousel mt-4">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={require('../images/castelao.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Arena Castelão</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/castelao">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/fonteNova.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Arena Fonte Nova</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/castelao">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/morumbi.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Morumbi</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/castelao">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/mineirao.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Mineirão</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/mineirao">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/vilaBelmiro.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Vila Belmiro</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/vila-belmiro">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/maracana.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Maracanã</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/maracana">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/saoJanuario.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio São Januário</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/sao-januario">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/beiraRio.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Beira-Rio</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/beira-rio">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/laBombonera.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio La Bombonera</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/la-bombonera">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/monumental.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Monumental de Núñez</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/monumental-de-nunez">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/libertadoresAmerica.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio Libertadores da América</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/libertadores-america">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={require('../images/elCilindro.jpg')} 
                            alt="..." style={{objectFit:'contain'}} height="800px"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Estádio El Cilindro</h1>
                                <button className="btn btn-success">
                                    <a href="/dashboard/stadiumList/el-cilindro">Ver Mais</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" style={{backgroundColor : 'black'}} aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" style={{backgroundColor : 'black'}} aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                </div>
            </div>
        </div>  
    );
}