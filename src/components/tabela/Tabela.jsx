import React from 'react';
import './style'
import { TabelaBox, TabelaH, TabelaTitulo } from './style';

const Login = () => {
  return (
    <TabelaBox>
    <div className="TabelaBox">
        <TabelaTitulo>
      <div className="titulo">
        <TabelaH>
        <h3>Membro</h3>
        <h3>Tempo</h3>
        </TabelaH>
      </div>
      </TabelaTitulo>
    </div>
    </TabelaBox>
  );
};

export default Login;