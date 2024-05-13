import React from 'react';
import logo from './cpe_logo.svg';
import logo005 from './cpe_logo005.svg'
import { alturaJanela, HeaderStyle1 } from '../../pages/Cadastro/style';
import voltaBotao from '../botão/imagem/desfazer.svg'
import { Voltar } from '../../pages/Cadastro/style';

const HeaderCadastro = () => {
  return (
    <HeaderStyle1>
    <header>
        <img src={logo005} alt="logo" />
    </header>
    </HeaderStyle1>
  );
};

    //<header>
    //    <Voltar>
    //    ←
    //    </Voltar> 
    //</header>

export default HeaderCadastro;