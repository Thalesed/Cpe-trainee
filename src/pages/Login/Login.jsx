import React from "react"

import TituloLogin from "../../components/titulo/tituloLogin"

import { useNavigate } from "react-router-dom";
import { Container, Container2, HighlightLink, Campo, Input, Button, Carregando } from "./style";
import { useState } from "react";

import api from "../../Services/api";
import useAuth from "../../stores/auth";


export default function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando ] = useState(false);
    const token = useAuth((state) => state.token);
    const setToken = useAuth((state) => state.setToken);
    const usuario = useAuth((state) => state.usuario);
    console.log({ token, usuario });

    const navigate = useNavigate();
    const handleSubmit = async (e) => { 
        e.preventDefault();
        console.log({email, senha});

        try {
          setCarregando(true);
          const res = await api.post("/login", { email, senha });
          const { token } = res.data;

          setToken(token);
          //console.log( res.data );
        } catch (erro) {
          console.error(erro);
          alert(erro.menssage);
        } finally {
          setCarregando(false);
        };
     };

     if (carregando){
      return (
        <Carregando>
          <h1>
            Carregando...
          </h1>
        </Carregando>
      )};

    return (
     <Container2>
        <TituloLogin tituloStr="Login"/>
          
           <Container>
             <form onSubmit={handleSubmit}>
              <Campo>
                <Input placeholder="Email" type="email" name="email" id= "email" required onChange={(e) => setEmail(e.target.value)}/>
              </Campo>
              <Campo>           
                <Input placeholder="Senha" type="password" name="senha" id="senha" required onChange={(e) => setSenha(e.target.value)}/>
              </Campo>               
                 
            <p>
            Ainda não tem uma conta? Faça seu cadastro  <HighlightLink className="aquiStyled" onClick= {() => navigate("/cadastro")}>aqui</HighlightLink>       
            </p>   

               <Button type="submit">Entrar</Button>
             </form> 
            
           </Container>
        
         </Container2>
    



    )
}

