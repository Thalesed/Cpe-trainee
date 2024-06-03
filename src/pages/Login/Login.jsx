import React, { useState } from "react";

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

import { BiMessageAltError } from "react-icons/bi";

import { usePostLogin } from "../../Hooks/query/Login";
import { QueryClient } from "react-query";

export default function Login() {
  const navigate = useNavigate();

  const [erroMensagem, setErroMensagem] = useState(false);

  const queryClient = new QueryClient();
  const { mutate: postLogin } = usePostLogin({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["login"],
      });
      setErroMensagem(false);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      setErroMensagem(true);
      //swal.fire("=(", "E-mail ou senha incorretos");
      //alert("E-mail ou senha incorretos");
    },
  });

  const onSubmit = (data) => {
    postLogin(data);
    console.log(data);
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
      <ErrorPopup aberto={erroMensagem}>
        <PopupItem>
          <BiMessageAltError style={{ scale: "4", marginTop: "40px" }} />
        </PopupItem>
        <PopupItem>
          <ErroMensagem>E-mail ou senha incorretos</ErroMensagem>
        </PopupItem>
        <PopupItem>
          <ButtonErro onClick={() => setErroMensagem(false)}>Fechar</ButtonErro>
        </PopupItem>
      </ErrorPopup>
    </Container2>
  );
}
