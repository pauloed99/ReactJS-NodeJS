import React from 'react';

export default function Carousel(){
    return (
        <div className="Carousel mt-4">
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={require('../images/maracana.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Primeiro Slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={require('../images/castelao.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Segundo Slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={require('../images/mineirao.jpg')} height="400px"
                    style={{objectFit:'contain'}} alt="Terceiro Slide" />
                </div>
            </div>
            </div>
        </div>
    );
}