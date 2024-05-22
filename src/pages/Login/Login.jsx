 import React from "react"
import TituloLogin from "../../components/titulo/tituloLogin"
import { useNavigate } from "react-router-dom";
import { Container, Container2, HighlightLink, Campo, Input, Button } from "./style";
import { useState } from "react";



export default function Login () {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => { 
        e.preventDefault();
        console.log({email, senha});
     }
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

