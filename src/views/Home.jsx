import React from 'react';
import { Button } from 'react-bootstrap';
import BGImgae from '../components/home5.jpg'
import "../styles/home.css"
import { Link } from 'react-router-dom';
export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Home = () => {

  return (
    <div className='home' style={{ backgroundImage: `url('${BGImgae}')` }}>
      <div className='tittle'>
        <h1>
          "Toda la informacion que pueda ser <br />recopilada en beneficio de las <br /> generaciones futuras debe recogerse <br />ahora o la oportunidad se perderá <br /> para siempre"
        </h1>
      </div>
    </div>
  );
};

export default Home;