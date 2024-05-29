import React from "react";
//import { Table, Space } from "antd";
import { Titulo, Input, Estrutura, Div1, Div2 } from "./style";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import projetos from "./TesteComObjetoEstatico";

const Projetos = () => {
  const [pesquisa, setPesquisa] = useState("");

  //const nomeProjeto = projetos.map((projetos) => projetos.name);
  //console.log(nomeProjeto);
  return (
    <Estrutura>
      <Titulo>gerenciar projetos</Titulo>
      <form>
        <Div1>
          <Input placeholder="Pesquisar" type="text" name="busca" id="busca" />
          <IoAddCircleOutline
            //style={{ width: "10" }}
            size={40}
            cursor="pointer"
            onClick={() => console.log("clicou")}
          />
        </Div1>

        {projetos?.map((projetos, index) => (
          <Div2 onClick={() => console.log(projetos)} key={index}>
            {projetos.name}
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
