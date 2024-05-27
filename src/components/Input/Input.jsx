import React from 'react';
import { DivInput, InputStyle, TituloC } from '../../pages/Cadastro/style';

const Input = ({x, id, register, error}) => {
    return (
        <>
        <DivInput>
            <InputStyle type='text' placeholder={x} id={id} error= {error} {...register(id)}/>
        </DivInput>
        </>
    );
}

export default Input;