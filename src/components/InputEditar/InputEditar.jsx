import React from 'react';
import { DivInput, InputStyle} from './style';

const InputEditar = ({x}) => {
    return (
        <>
        <DivInput>
            <span>{x}:</span>
            <InputStyle type='text'/>
        </DivInput>
        </>
    );
}

export default InputEditar;