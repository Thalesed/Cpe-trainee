import React, {useState} from 'react';
import {Grid, Rodape, TButton, Titulo, YButton} from './style'
import Input from '../ModalInput/Input';
import InputBox from '../ModalInputBox/ModalInputBox';
import { usePostSessao } from '../../Hooks/query/Sessoes';

import { ErrorPopup, ButtonErro, PopupItem, ErroMensagem } from "./style";
import { BiMessageAltError } from "react-icons/bi";

import useAuth from '../../stores/auth';

const ModalLogin = () => {
  const usuario = useAuth((state) => state.usuario);
  const [erroMensagem, setErroMensagem] = useState(false);

  const { mutate: criarSessao } = usePostSessao({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sessoes"],
      });
      setErroMensagem(false);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      setErroMensagem("Você já está logado!");
      hideModal();
    },
  });

  

  function hideModal() {
    console.log("teste");
    var elements = document.getElementsByClassName("ModalLogin");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
  }

  function confirmar(){
    if(!usuario._id){
      setErroMensagem("Usuário não encontrado. Você está logado?");
    }else{
      criarSessao({"id_usuario": usuario._id, "id_projeto": "66453f5848ca1ca72ede85db"});
    }
  }

  return (
    <Grid className='ModalLogin'>
        <Titulo><text>Confirmação de Login</text></Titulo>

        <Input text="* Como deseja logar?" placeH={"Presencial/Remoto"} opcoes={["Presencial", "Remoto"]}></Input>

        <Input text="* O que você pretende fazer nesse horário?" placeH="Selecione a tarefa" opcoes={["Outros", "Tarefas/Operacional", "Equipes Paralelas", "Reunião"]}></Input>

        <Input text="Você vai trabalhar em algum projeto específico?" placeH="Você vai trabalhar em algum projeto?" opcoes={["Ponto", "Violão mágico", "Diversos", "Projeto Novo"]}></Input>

        <InputBox text="Deseja descrever melhor o que irá fazer?" placeH="Descrição da atividade exercida"/>

        <Rodape>
            <TButton onClick={hideModal}>Cancelar</TButton>

            <YButton onClick={confirmar}>Confirmar</YButton>
        </Rodape>
        <ErrorPopup aberto={erroMensagem}>
        <PopupItem>
          <BiMessageAltError style={{ scale: "4", marginTop: "40px" }} />
        </PopupItem>
        <PopupItem>
          <ErroMensagem>{erroMensagem}</ErroMensagem>
        </PopupItem>
        <PopupItem>
          <ButtonErro onClick={() => setErroMensagem(false)}>Fechar</ButtonErro>
        </PopupItem>
      </ErrorPopup>
        
    </Grid>
  );
};

export default ModalLogin;