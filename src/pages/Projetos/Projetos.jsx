import React from "react"

import { Titulo, Input, Projeto, Estrutura, Div1} from './style';

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
        
        <Div1>
          <Projeto>Projeto 1</Projeto>
          <Div1>
            <h2>a</h2>
            <h2>b</h2>
          </Div1>
        </Div1>
        </form>
        </Estrutura>
    )}

export default Projetos;