import React from "react"
//import { Table, Space } from "antd";
import { Titulo, Input, Estrutura, Div1, StyledTable, StyledSpace} from './style';

const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      key: 'action',
      render: () => (
        <StyledSpace size="middle" color="black">
          <a>Edit</a>
          <a>Delete</a>
        </StyledSpace>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Projeto 1',
    },
    {
      key: '2',
      name: 'Projeto 2',
    },
    {
      key: '3',
      name: 'Projeto 3',
    },
  ];
    

const Projetos = () => {
    return(
        <Estrutura>
        <Titulo>gerenciar projetos</Titulo>
        <form>
        <Div1>
           <Input placeholder="Pesquisar" type="text" name="busca" id= "busca"/> 
           <h1> 
            + 
           </h1>
        </Div1>
        <StyledTable dataSource={data} columns={columns} />
        </form>
        </Estrutura>
    )}

export default Projetos;