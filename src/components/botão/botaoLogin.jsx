import React from 'react';
import { Botão } from '../../pages/Login/style';
import { DivInput} from '../../pages/Login/style';

function BotaoLogin(props) {
    return (
        <>
        <DivInput>
            <Botão onClick={props.onClick}>
            Entrar
            </Botão> 
        </DivInput>
        </>
    );
}

export default BotaoLogin;