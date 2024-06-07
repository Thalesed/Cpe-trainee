import React from "react";
import Input from "../../components/Input/Input";
import TituloCadastro from "../../components/titulo/titulo";
import BotaoCadastro from "../../components/botão/botãoCadastro";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BotaoVoltarCadastro from "../../components/botão/botaoVoltar";
//import FundoCadastro from "../../components/fundo/fundoCadastro"

import { useCreateCadastro, useGetCadastro } from "../../Hooks/query/Tools";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validator } from "./utils";

export default function Cadastro() {
  const { data: cadastro } = useCreateCadastro({
    onError: (err) => {
      console.log(err);
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validator) });
  function onSubmit(data) {}

  return (
    <>
      <TituloCadastro tituloStr="cadastrar" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          error={!!errors?.email?.message}
          descrição="Email"
          ID="email"
        />
        {errors?.email?.message && <p>{errors?.email?.message}</p>}
        <Input
          register={register}
          error={!!errors?.senha?.message}
          descrição="Senha"
          ID="senha"
        />
        {errors?.senha?.message && <p>{errors?.senha?.message}</p>}
        <Input
          register={register}
          error={!!errors?.nome?.message}
          descrição="Nome"
          ID="nome"
        />
        {errors?.nome?.message && <p>{errors?.nome?.message}</p>}
        <Input
          register={register}
          error={!!errors?.cargo?.message}
          descrição="Cargo"
          ID="cargo"
        />
        {errors?.cargo?.message && <p>{errors?.cargo?.message}</p>}
        <Input
          register={register}
          error={!!errors?.status?.message}
          descrição="Status"
          ID="status"
        />
        {errors?.status?.message && <p>{errors?.status?.message}</p>}
        <BotaoCadastro type="submit" />
      </form>
    </>
  );
}
