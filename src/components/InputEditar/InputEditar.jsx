import React, {useState} from 'react';
import { DivInput, InputStyle} from './style';

const InputEditar = ({x, handleChange}) => {
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (handleChange) {
            handleChange(newValue);
        }
    };

    return (
        <>
        <DivInput>
            <span>{x}:</span>
            <InputStyle type='text' value={inputValue} onChange={onChange} />
        </DivInput>
        </>
    );
}

export default InputEditar;