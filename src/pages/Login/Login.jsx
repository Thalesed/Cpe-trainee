 import React from "react"
import Input from "../../components/Input/Input"
import TituloLogin from "../../components/titulo/tituloLogin"
import BotaoLogin from "../../components/botão/botaoLogin"
import { useNavigate } from "react-router-dom";
import { Container, HighlightLink } from "./style";

const Login = () =>{

    const navigate = useNavigate();
    return (
   
       
        <>
        <TituloLogin tituloStr="Login"/>
        <Input x='E-mail'/>
        <Input x='Senha'/>
        <divt>
       <Container>
           <p>
            Ainda não tem uma conta? Faça seu cadastro  <HighlightLink className="aquiStyled" onClick= {() => navigate("/cadastro")}>aqui</HighlightLink>
          <BotaoLogin onClick={() => navigate("/")}>  </BotaoLogin>

          </p> 

          
          </Container>
        </divt>
       

      
       
        </>
    



    )
}

export default Login;