import React from "react";
import Input from "../../components/Input/Input";
import TituloCadastro from "../../components/titulo/titulo";
import BotaoCadastro from "../../components/botão/botãoCadastro";
import { useForm } from "react-hook-form";

const Cadastro = () => {
  const { handleSubmit } = useForm();
  const onSubmit = () => {};

  return (
    <>
      <TituloCadastro tituloStr="cadastrar" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input descrição="E-mail" tipo="email" nome="email" ID="email" />
        <Input descrição="Nome" tipo="name" nome="nome" ID="nome" />
        <Input descrição="Senha" tipo="password" nome="senha" ID="senha" />
        <Input descrição="Cargo" tipo="string" nome="cargo" ID="cargo" />
        <BotaoCadastro type="submit" />
      </form>
    </>
  );
};

export default Cadastro;
