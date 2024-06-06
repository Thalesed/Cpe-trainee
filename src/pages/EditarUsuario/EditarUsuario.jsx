import React, {useState} from 'react';
import InputEditar from "../../components/InputEditar/InputEditar"
import TituloEditar from "../../components/titulo/titulo"
import BotaoEditar from "../../components/BotaoEditar/ButaoEditar"
import {DivBotao, InputBox} from './style';
import { useUpdateUsuario, useGetUsuarios } from '../../Hooks/query/Usuarios';
import {getUsuarioId} from './utils';
import { useNavigate } from "react-router-dom";
import useAuth from '../../stores/auth';

import { ErrorPopup, ButtonErro, PopupItem, ErroMensagem } from "./style";
import { BiMessageAltError } from "react-icons/bi";

import { QueryClient } from "react-query";

const EditarUsuario = () => {
  const navigate = useNavigate();

 

  const token = useAuth((state) => state.token);
  const usuario = useAuth((state) => state.usuario);

  const [nome, setNome] = useState(usuario?.nome || " ");
  const [cargo, setCargo] = useState(" ");

  const [erroMensagem, setErroMensagem] = useState(false);

  const queryClient = new QueryClient();

  const {data : usuarios} = useGetUsuarios({
    onError: (err) => {
      console.log(err);
    },
  });

const { mutate: atualizarUsuario } = useUpdateUsuario({
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["usuarios"],
    });
    navigate("/");
  },
  onError: (err) => {
    setErroMensagem("Não autorizado. Você está logado?");
    console.log(err);
  },
});


  function sendUpdate(){
    if(!usuarios || getUsuarioId(usuarios, nome) == null){
      setErroMensagem("Usuário não encontrado");
    }else if(cargo === " "){
      setErroMensagem("Campo cargo vazio");
    }else{
      setErroMensagem("");
      atualizarUsuario({"id":getUsuarioId(usuarios, nome), "usuarioAtualizado":{"cargo":cargo}});
      atualizarUsuario({"id":getUsuarioId(usuarios, nome), "usuarioAtualizado":{"cargo":cargo}});
    }
    
  }

  return (
    <>
        <TituloEditar tituloStr="editar"/>
        <InputBox>
          <InputEditar val={usuario?.nome || " "} x='Nome' handleChange={(text) => setNome(text)}/>
          <InputEditar x='Cargo' handleChange={(text) => setCargo(text)}/>
        </InputBox>
        <DivBotao>
          <BotaoEditar text="cancelar"/>
          <BotaoEditar text="salvar" handleClick={sendUpdate}/>
        </DivBotao>
        <ErroPopUp erroMsg={erroMensagem} hide={() => setErroMensagem(false)} />
    </>
  );
};
export default EditarUsuario;