import React from 'react';
import { DivInput, InputStyle, TituloC } from '../../pages/Cadastro/style';

const Input = ({x}) => {
    return (
        <>
        <DivInput>
            <InputStyle type='text' placeholder={x}/>
        </DivInput>
        </>
    );
}

export default Input;