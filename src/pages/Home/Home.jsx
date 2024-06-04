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
  return (
    <div className="home">
      <Carrossel />
      <Tabela />
    </div>
  );
};

export default Home;
