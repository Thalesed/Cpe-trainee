import React from 'react';
import InputEditar from "../../components/InputEditar/InputEditar"
import TituloEditar from "../../components/titulo/titulo"
import BotaoEditar from "../../components/BotaoEditar/ButaoEditar"

import {DivBotao, InputBox} from './style';



const EditarUsuario = () => {
  return (
    <>
        <TituloEditar tituloStr="editar"/>
        <InputBox>
          <InputEditar x='Nome'/>
          <InputEditar x='Cargo'/>
          <InputEditar x='Status'/>
        </InputBox>

        <DivBotao>
          <BotaoEditar text="cancelar"/>
          <BotaoEditar text="salvar"/>
        </DivBotao>
    </>
  );
};

export default EditarUsuario;