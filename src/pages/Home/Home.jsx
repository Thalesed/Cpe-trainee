import React from "react";
//import Carrossel from '../components/Carrossel';
import Tabela from "../../components/tabela/Tabela.jsx";
import Carrossel from "../../components/carrossel/Carrossel.jsx";
import api from "../../services/api/api";
import { useState, useEffect } from "react";
import { ContainerC } from "./style.js";
import { Usuario } from "../../components";
import { useGetUsuarios } from "../../Hooks/query/Usuarios.js";

const Home = () => {
  const { data: usuarios, isLoading: carregando } = useGetUsuarios({
    onError: (err) => {
      console.log(err);
    },
  });
  console.log(usuarios);
  if (carregando)
    return (
      <ContainerC>
        <h1>Carregando...</h1>
      </ContainerC>
    );
  return (
    <div className="home">
      <Carrossel />

      {usuarios?.map((usuario) => (
        <Usuario usuario={usuario} />
      ))}
    </div>
  );
};

export default Home;
