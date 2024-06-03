import React from 'react';
import './style'
import { TabelaBox, ButtonLogin, Grid } from './style';
import ModalLogin from '../ModalLogin/ModalLogin';

const Tabela = () => {
  function showModal() {
    console.log("teste");
    var elements = document.getElementsByClassName("ModalLogin");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
        elements[i].style.filter = 'none';
    }
    
  }

  return (
    <>
    <ModalLogin className="modal"/>
    <Grid className="Tabela">
    <ButtonLogin onClick={showModal}>Fazer Login</ButtonLogin>
    <TabelaBox>
    <div className="TabelaBox">
      <div className="titulo">
        <h3>Membro</h3>
        <h3>Tempo</h3>
      </div>
    </div>
    </TabelaBox>
    </Grid>
    </>
  );
};

export default Tabela;