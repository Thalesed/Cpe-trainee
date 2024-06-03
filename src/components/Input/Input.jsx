import React from "react";
import { DivInput, InputStyle, TituloC } from "../../pages/Cadastro/style";

const Input = ({ descrição, tipo, nome, ID }) => {
  return (
    <>
      <DivInput>
        <InputStyle
          placeholder={descrição}
          type={tipo}
          name={nome}
          id={ID}
          required
        />
      </DivInput>
    </>
  );
};

export default Input;
