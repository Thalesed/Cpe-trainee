import React from 'react';
import {InputDiv, PlaceHolder} from './style'

const Input = ({text, placeH, opcoes}) => {
  return (
    <InputDiv>
    <div className="text">{text}</div>
    <select required>
        <option value="" disabled hidden>{placeH}</option>
        {opcoes && opcoes.map((opcao, index) => (
          <option key={index} value={index}>{opcao}</option>
        ))}
    </select>
    </InputDiv>
  );
};

export default Input;