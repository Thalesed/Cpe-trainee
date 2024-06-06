import {
  Titulo,
  Input,
  Estrutura,
  Div1,
  Div2,
  PopupItem,
  Mensagem,
  MensagemPrincipal,
  BotaoConfirma,
  ConfirmaPopup,
  InputPopup,
  InputsStyle,
  EditaPopup,
  MensagemInput,
} from "../style";
import { act, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { usePostProjetos } from "../../../Hooks/query/Projetos";

export function CriaProjeto({ cria, setCria }) {
  const queryClient = useQueryClient();
  const { mutate: atualizaProjeto } = usePostProjetos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projetos"],
      });
    },
    onError: (err) => {
      console.log(err);
      alert("Projeto já criado");
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(id, data);
    atualizaProjeto({ body: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EditaPopup aberto={cria}>
        <PopupItem style={{ marginTop: "0px", position: "relative" }}>
          <PopupItem>
            <IoIosClose
              size={35}
              style={{
                display: "flex",
                color: "gold",
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={() => setCria(false)}
            />
          </PopupItem>
        </PopupItem>

        <PopupItem>
          <MensagemPrincipal>Criar Projeto</MensagemPrincipal>
        </PopupItem>

        <MensagemInput>Nome</MensagemInput>

        <InputsStyle>
          <InputPopup
            placeholder="Digite o nome"
            type="name"
            name="nome"
            id="nome"
            required
            {...register("nome")}
          />
        </InputsStyle>

        <MensagemInput>Descrição</MensagemInput>

        <InputsStyle>
          <InputPopup
            placeholder="Digite a descrição"
            type="text"
            name="descrição"
            id="descrição"
            style={{ height: "70px" }}
            {...register("descrição")}
          />
        </InputsStyle>

        <PopupItem style={{ marginTop: "30px" }}>
          <BotaoConfirma
            onClick={function () {
              //atualizaProjeto(id);
              setCria(false);
            }}
            type="submit"
          >
            Salvar
          </BotaoConfirma>
        </PopupItem>
      </EditaPopup>
    </form>
  );
}
