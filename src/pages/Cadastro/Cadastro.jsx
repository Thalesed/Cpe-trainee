import React from "react"
import Input from "../../components/Input/Input"
import TituloCadastro from "../../components/titulo/titulo"
import BotaoCadastro from "../../components/botão/botãoCadastro"
import BotaoVoltarCadastro from "../../components/botão/botaoVoltar"
//import FundoCadastro from "../../components/fundo/fundoCadastro"

const Cadastro = () =>{
    return(
        <>
        <TituloCadastro tituloStr="cadastrar"/>
        <Input x='E-mail'/>
        <Input x='Senha'/>
        <Input x='Nome'/>
        <Input x='Cargo'/>
        <BotaoCadastro/>
       
        </>
    )
}

export default Cadastro