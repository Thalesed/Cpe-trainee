import React, {useState} from 'react';
import InputEditar from "../../components/InputEditar/InputEditar"
import TituloEditar from "../../components/titulo/titulo"
import BotaoEditar from "../../components/BotaoEditar/ButaoEditar"
import {DivBotao, InputBox} from './style';
import { useUpdateUsuario, useGetUsuarios } from '../../Hooks/query/Usuarios';
import {getUsuarioId} from './utils';

import useAuth from '../../stores/auth';

const EditarUsuario = () => {
  const [nome, setNome] = useState(useAuth());
  const [cargo, setCargo] = useState(" ");
  const [forms, setForms] = useState({});

  const {userName} = useAuth();

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
    console.log(userName);
    if(getUsuarioId(usuarios, nome) == null){
        alert("Usuário inesistente");
    }else if(cargo === " "){
      alert("Campo cargo vazio");
    }else{
      atualizarUsuario({"id":getUsuarioId(usuarios, nome), "usuarioAtualizado":{"cargo":cargo}});
    }
  }
  console.log(useAuth());

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