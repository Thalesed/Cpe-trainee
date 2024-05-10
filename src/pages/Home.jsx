import React from 'react';
import Header from '../components/header/Header.jsx';
//import Carrossel from '../components/Carrossel';
import Tabela from '../components/tabela/Tabela.jsx'
import Carrossel from '../components/carrossel/Carrossel.jsx'

const Home = () => {
  return (
    <>
        <Header />
        <Carrossel/>
        <Tabela />
    </>
  );
};

export default Home;