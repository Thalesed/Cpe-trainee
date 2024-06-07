import React, { useState, useEffect } from "react";

import TituloLogin from "../../components/titulo/tituloLogin";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Container2,
  HighlightLink,
  Campo,
  Input,
  Button,
  ErrorPopup,
  ButtonErro,
  PopupItem,
  ErroMensagem,
} from "./style";

import {jwtDecode} from 'jwt-decode'


import { usePostLogin } from "../../Hooks/query/Login";
import { QueryClient } from "react-query";

import useAuth from "../../stores/auth";

import ErroPopUp from "../../components/ErroPopUp/ErroPopUp";

export default function Login() {
  const navigate = useNavigate();

  const [erroMensagem, setErroMensagem] = useState(false);
  const [primeira, setPrimeira] = useState(true);


  const token = useAuth((state) => state.token);
  const usuario = useAuth((state) => state.usuario);
  const setToken = useAuth((state) => state.setToken);
  const setUsuario = useAuth((state) => state.setUsuario);
  const clearAuth = useAuth((state) => state.clearAuth);

  useEffect(() => {
    if(usuario){
      setErroMensagem("Você já está logado como: " + usuario.nome);
    }
  }, []);

  

  const queryClient = new QueryClient();
  const { mutate: postLogin } = usePostLogin({
    onSuccess: (data) => {
      
      clearAuth();
      setToken(data?.token || " ");
      setUsuario(jwtDecode(token));

      console.log(usuario.nome);

      queryClient.invalidateQueries({
        queryKey: ["login"],
      });

      setErroMensagem(false);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      if({primeira}){
        setErroMensagem("Usuario ou email inexistentes");
      }
      //swal.fire("=(", "E-mail ou senha incorretos");
      //alert("E-mail ou senha incorretos");
    },
  });

  const onSubmit = (data) => {
    postLogin(data);
    postLogin(data);
    setPrimeira(false);
    //console.log(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Container2>
      <Container ErroLogin={erroMensagem}>
        <TituloLogin tituloStr="Login" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Campo>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
              {...register("email")}
            />
          </Campo>
          <Campo>
            <Input
              placeholder="Senha"
              type="password"
              name="senha"
              id="senha"
              required
              {...register("senha")}
            />
          </Campo>
          <p>
            Ainda não tem uma conta? Faça seu cadastro{" "}
            <HighlightLink
              className="aquiStyled"
              onClick={() => navigate("/cadastro")}
            >
              aqui
            </HighlightLink>
          </p>

          <Button type="submit">Entrar</Button>
        </form>
      </Container>
      <ErroPopUp erroMsg={erroMensagem} hide={() => {setErroMensagem(false);}}/>
    </Container2>
  );
}