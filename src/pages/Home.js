import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';


export default function Home() {
  return (
    <div className = "Home">
      <NavBar />
      <Carousel />
      <Jumbotron />
    </div>
  );
}

