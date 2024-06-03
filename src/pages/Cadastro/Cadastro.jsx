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

          
                   
        <Input register = {register} error={!!errors?.email?.message} x="Email" id= "email" />
        {errors?.email?.message && <p>{errors?.email?.message}</p>}
        <Input register = {register} error={!!errors?.senha?.message} x="Senha"  id="senha" />
        {errors?.senha?.message && <p>{errors?.senha?.message}</p>}
        <Input register = {register} error={!!errors?.nome?.message}x="Nome"  id="nome" />
        {errors?.nome?.message && <p>{errors?.nome?.message}</p>}
        <Input register = {register}error={!!errors?.cargo?.message} x="Cargo"  id="cargo" />
        {errors?.cargo?.message && <p>{errors?.cargo?.message}</p>}
        <Input register = {register}error={!!errors?.status?.message} x="Status"  id="status"/>
        {errors?.status?.message && <p>{errors?.status?.message}</p>}
        <BotaoCadastro type="submit"/>
       </form>
        </>
    )
   
}
