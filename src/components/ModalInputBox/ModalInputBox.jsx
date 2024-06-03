import React from 'react';
import {InputDiv} from './style'

const Input = ({text, placeH}) => {
  return (
    <InputDiv>
    <div className="text">{text}</div>
    <textarea type="text" placeholder={placeH}></textarea>
    </InputDiv>
  );
};

export default Input;