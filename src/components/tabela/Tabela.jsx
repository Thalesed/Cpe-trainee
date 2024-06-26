import React, {useEffect, useState} from "react";
import "./style";
import { TabelaBox, ButtonLogin, Grid, Titulo } from "./style";
import ModalLogin from "../ModalLogin/ModalLogin";
import Sessao from "../Sessao/Sessao";
import { useGetSessoes } from "../../Hooks/query/Sessoes";

import { QueryClient } from "react-query";

import ErroPopUp from "../../components/ErroPopUp/ErroPopUp";

const Tabela = () => {
  const [recarregar, setRecarregar] = useState(false);
  const [arraySessoes, setArraySessoes] = useState([]);
  const [erroMensagem, setErroMensagem] = useState(false);

  function showModal() {
    var elements = document.getElementsByClassName("ModalLogin");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
      elements[i].style.filter = "none";
    }
  }
  const queryClient = new QueryClient();
  const { data: sessoes, isLoading: carregando } = useGetSessoes({
    onError: (err) => {
      console.log(err);
      setErroMensagem("Servidor indisponivel");
    },
  });

  return (
    <>
      <ModalLogin className="modal" />
      <Grid className="Tabela">
        <ButtonLogin onClick={showModal}>Fazer Login</ButtonLogin>
        <TabelaBox>
          <div className="TabelaBox">
            <Titulo>
              <h3>Membro</h3>
              <h3>Projeto</h3>
              <h3>Entrada</h3>
              <h3>Tempo</h3>
              </Titulo>
            <div style={{ padding: "15px" }}>
            {carregando ? (
                <p>Carregando...</p>
              ) : (
                Array.isArray(sessoes) && sessoes.map((sessao) => (
                  <Sessao sessao={sessao} />
                ))
              )}
            </div>
          </div>
          
        </TabelaBox>
        <ErroPopUp erroMsg={erroMensagem} hide={() => {setErroMensagem(false);}}/>
      </Grid>
    </>
  );
};

export default Tabela;