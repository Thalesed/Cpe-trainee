import React, { useState } from "react";
import { Titulo, Input, Estrutura, Div1, Div2 } from "./style";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import projetos from "./TesteComObjetoEstatico";

const Projetos = () => {
  const [busca, setBusca] = useState("");

  // Função para filtrar projetos
  function pesquisaTempoReal(busca) {
    return projetos.filter(function (projeto) {
      return projeto.name.indexOf(busca) > -1; //verifica se tem o valor pesquisado na busca no campo do nome do projeto
    });
  }

  const atualizaBusca = (e) => {
    setBusca(e.target.value);
  };

  return (
    <Estrutura>
      <Titulo>gerenciar projetos</Titulo>
      <form>
        <Div1>
          <Input
            placeholder="Pesquisar"
            type="text"
            name="busca"
            id="busca"
            value={busca}
            onChange={atualizaBusca}
          />
          <IoAddCircleOutline
            size={40}
            cursor="pointer"
            onClick={() => console.log("clicou")}
          />
        </Div1>

        {pesquisaTempoReal(busca)?.map((projeto) => (
          <Div2 key={projeto._id}>
            {projeto.name ? projeto.name : <h1>não encontrado</h1>}
            <div>
              <FaRegEdit
                style={{ marginRight: "10px" }}
                cursor="pointer"
                onClick={() => console.log("edita")}
              />
              <BsTrash cursor="pointer" onClick={() => console.log("deleta")} />
            </div>
          </Div2>
        ))}
      </form>
    </Estrutura>
  );
};

export default Projetos;
