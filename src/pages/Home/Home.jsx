import React from 'react';
//import Carrossel from '../components/Carrossel';
import Tabela from '../../components/tabela/Tabela.jsx'
import Carrossel from '../../components/carrossel/Carrossel.jsx'
import { useGetUsuarios } from '../../Hooks/query/Usuarios.js';

const Home = () => {
  const {data : usuarios} = useGetUsuarios({
    onError: (err) => {
      console.log(err);
    },
  });
  console.log(import.meta.env.BASE_URL);
  return (
    <>
        <Carrossel/>
        <Tabela />
    </>
  );
};

export default Home;