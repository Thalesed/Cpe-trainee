import React from 'react';
import {Grid, Rodape, TButton, Titulo, YButton} from './style'
import Input from '../ModalInput/Input';
import InputBox from '../ModalInputBox/ModalInputBox';

const ModalLogin = () => {
  function hideModal() {
    console.log("teste");
    var elements = document.getElementsByClassName("ModalLogin");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
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

            <YButton>Confirmar</YButton>
        </Rodape>
        
    </Grid>
  );
};

export default ModalLogin;