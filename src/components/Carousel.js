import React from 'react';

export default function Carousel(){
    return (
        <div className="Carousel mt-4">
           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={require('../images/maracana.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Primeiro Slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={require('../images/castelao.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Primeiro Slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={require('../images/mineirao.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Primeiro Slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
            </div>
        </div>
    );
}