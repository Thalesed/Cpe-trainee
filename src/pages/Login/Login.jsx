 import React from "react"
import Input from "../../components/Input/Input"
import TituloLogin from "../../components/titulo/tituloLogin"
import BotaoLogin from "../../components/botão/botaoLogin"
import { useNavigate } from "react-router-dom";


const Login = () =>{

    const navigate = useNavigate();
    return (
   
       
        <>
        <TituloLogin tituloStr="Login"/>
        <Input x='E-mail'/>
        <Input x='Senha'/>

        <BotaoLogin onClick={() => navigate("/")}>


        </BotaoLogin>
       
        </>
    



    )
}

export default Login;