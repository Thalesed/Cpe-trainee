import React from 'react';
//import Carrossel from '../components/Carrossel';
import Tabela from '../../components/tabela/Tabela.jsx'
import Carrossel from '../../components/carrossel/Carrossel.jsx'

const Home = () => {
  return (
    <div className="home">
        <Carrossel/>
        <Tabela />
    </div>
  );
};

export default Home;