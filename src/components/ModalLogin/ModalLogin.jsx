import React, {useEffect, useState} from 'react';
import {Grid, Rodape, TButton, Titulo, YButton} from './style'
import Input from '../ModalInput/Input';
import InputBox from '../ModalInputBox/ModalInputBox';
import { usePostSessao } from '../../Hooks/query/Sessoes';

import { QueryClient } from "react-query";

import useAuth from '../../stores/auth';

import ErroPopUp from "../../components/ErroPopUp/ErroPopUp";
import { useGetProjetos } from '../../Hooks/query/Projetos';

import { useNavigate } from "react-router-dom";

import {getProjetoId} from './utils'

const ModalLogin = () => {
  const navigate = useNavigate();

  const usuario = useAuth((state) => state.usuario);
  const [erroMensagem, setErroMensagem] = useState(false);
  const [projetosNomes, setProjetosNomes] = useState([]);
  const [projetoSelecionado, setProjetoSelecionado] = useState("");

  const queryClient = new QueryClient();

  const { data: projetos, isLoading: carregando } = useGetProjetos({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: criarSessao } = usePostSessao({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sessoes"],
      });
      setErroMensagem(false);
      hideModal();
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
      setErroMensagem("Erro ao iniciar sessão");
    },
  });

  function carregarNomesProjetos(){
    projetosNomes.length = 0;
      for (let i = 0; i < projetos?.length; i++) {
        projetosNomes.push(projetos[i]?.nome);
      }
  }

  function hideModal() {
    console.log("teste");
    var elements = document.getElementsByClassName("ModalLogin");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    navigate("/");
  }


  function projetoSel() {
    
    const selectProjetos = document.getElementById('selectProjetos');
    const valor = selectProjetos?.value;
    return valor;
  }

  function confirmar(){
    const selectModo = document.getElementById('modo');
    const selectTarefa = document.getElementById('tarefa');
    if(!selectModo.value || !selectTarefa.value){
      setErroMensagem("Campos obrigatorios vazios");
      return null;
    }
    if(!usuario?._id){
      setErroMensagem("Usuário não encontrado. Você está logado?");
    }else{
      if(projetoSel()){
        criarSessao({"id_usuario": usuario?._id, "id_projeto": getProjetoId(projetos, projetosNomes[projetoSel()])});
      }else{
        criarSessao({"id_usuario": usuario?._id});
      }
    }
  }

  return (
    <Grid className='ModalLogin'>
        <Titulo><text>Confirmação de Login</text></Titulo>
        {carregarNomesProjetos()}

        <Input idSelect="modo" text="* Como deseja logar?" placeH={"Presencial/Remoto"} opcoes={["Presencial", "Remoto"]}></Input>

        <Input idSelect="tarefa" text="* O que você pretende fazer nesse horário?" placeH="Selecione a tarefa" opcoes={["Outros", "Tarefas/Operacional", "Equipes Paralelas", "Reunião"]}></Input>

        {carregando ? (
          <p>Carregando</p>
        
        ) : (
          <Input text="Você vai trabalhar em algum projeto específico?" placeH="Você vai trabalhar em algum projeto?" opcoes={projetosNomes} idSelect="selectProjetos"></Input>
        )}

        <InputBox text="Deseja descrever melhor o que irá fazer?" placeH="Descrição da atividade exercida"/>

        <Rodape>
            <TButton onClick={hideModal}>Cancelar</TButton>

            <YButton onClick={confirmar}>Confirmar</YButton>
        </Rodape>
        <ErroPopUp erroMsg={erroMensagem} hide={() => {setErroMensagem(false); hideModal();}} />
        
    </Grid>
  );
};

export default ModalLogin;
