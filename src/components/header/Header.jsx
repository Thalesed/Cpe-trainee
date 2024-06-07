import React, {useEffect, useState} from 'react';
import logo from "./cpe_logo.svg";
import pics from "./header_logos.png";
import pessoas from "./pessoas.png";
import lampProjeto from "./lamp_projetos.png";

import { useNavigate } from "react-router-dom";
import { ContainerU, DivHeader, HeaderStyle, LadoDireito, LadoEsquerdo, LogoContainer, Logos } from "./style";

import useAuth from "../../stores/auth";
import ErroPopUp from "../../components/ErroPopUp/ErroPopUp";

import Login from '../../pages/Login/Login';
import Editar from '../../pages/Login/Login';

const Header = ({home}) => {
  const [erroMensagem, setErroMensagem] = useState(false);
  const navigate = useNavigate();

  const token = useAuth((state) => state.token);
  const usuario = useAuth((state) => state.usuario);
  const setToken = useAuth((state) => state.setToken);
  const setUsuario = useAuth((state) => state.setUsuario);
  const clearAuth = useAuth((state) => state.clearAuth);


  return (
    <HeaderStyle>
      <DivHeader>
        <img className="cpe-logo" src={logo} alt="logo" />
        <ContainerU>
          {usuario ? (
            <>
              <img src={lampProjeto} onClick={() => {navigate("/projetos")}}/>
              <img src={pessoas}/>
            </>
          ):
          (
            null
          )}
        <LogoContainer>
          <LadoEsquerdo onClick={() => {usuario ? (navigate("/editar")) : (navigate("/login"))}}/>
          <LadoDireito onClick={() => {usuario ? (clearAuth()) : setErroMensagem("Você não está logado")}}/>
          <Logos src={pics} />
          <ErroPopUp erroMsg={erroMensagem} hide={() => {setErroMensagem(false);}} />
        </LogoContainer>
      </ContainerU>
      </DivHeader>
    </HeaderStyle>
  );
};

export default Header;
