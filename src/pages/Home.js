import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import Carousel from '../components/Carousel';


export default function Home(props) {
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token)
        props.history.push('/dashboard');
  });

  
  return (
    <div className = "Home">
      <NavBar />
      <Carousel />
      <Jumbotron />
    </div>
  );
}

