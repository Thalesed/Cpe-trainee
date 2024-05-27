import React, {useState} from 'react';
import InputEditar from "../../components/InputEditar/InputEditar"
import TituloEditar from "../../components/titulo/titulo"
import BotaoEditar from "../../components/BotaoEditar/ButaoEditar"

import {DivBotao, InputBox} from './style';

import { useUpdateUsuario, useGetUsuarios } from '../../Hooks/query/Tools';
import {getUsuarioId} from './utils';

const EditarUsuario = () => {
  const [nome, setNome] = useState(" ");
  const [cargo, setCargo] = useState(" ");
  const [forms, setForms] = useState({});

  const {data : usuarios} = useGetUsuarios({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: atualizarUsuario } = useUpdateUsuario({
    onError: (err) => {
        console.log(err);
    }
});


  function sendUpdate(){
    console.log(getUsuarioId(usuarios, nome));
    atualizarUsuario({"id":getUsuarioId(usuarios, nome), "usuarioAtualizado":{"cargo":cargo}});
  }
  
  return (
    <>
        <TituloEditar tituloStr="editar"/>
        <InputBox>
          <InputEditar x='Nome' handleChange={(text) => setNome(text)}/>
          <InputEditar x='Cargo' handleChange={(text) => setCargo(text)}/>
        </InputBox>

        <DivBotao>
          <BotaoEditar text="cancelar"/>
          <BotaoEditar text="salvar" handleClick={sendUpdate}/>
        </DivBotao>
    </>
  );
};

export default EditarUsuario;