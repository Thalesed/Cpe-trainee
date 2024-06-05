import React, {useState} from 'react';
import { DivInput, InputStyle} from './style';

const InputEditar = ({x, handleChange, val}) => {
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => {
        if(inputValue === ""){
            setInputValue(val);       
        }
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
            <InputStyle type='text' value={inputValue} onChange={onChange} placeholder={val} />
        </DivInput>
        </>
    );
}

export default InputEditar;