import React from "react"
import Header from "../../components/header/Header"
import Input from "../../components/Input/Input"
import TituloCadastro from "../../components/titulo/titulo"
import BotaoCadastro from "../../components/botão/botãoCadastro"
import BotaoVoltarCadastro from "../../components/botão/botaoVoltar"
//import FundoCadastro from "../../components/fundo/fundoCadastro"

const Cadastro = () =>{
    return(
        <>
        <Header></Header>
        <BotaoVoltarCadastro></BotaoVoltarCadastro>
        <TituloCadastro>
        </TituloCadastro>
        <Input x='E-mail'/>
        <Input x='Senha'/>
        <Input x='Nome'/>
        <Input x='Cargo'/>
        <Input x='Status'/>
        <BotaoCadastro/>

        
       
        </>
    )
}

export default Cadastro